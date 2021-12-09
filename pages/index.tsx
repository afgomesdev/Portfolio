import { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

import { Container, Content } from "../styles/index";

const Home: NextPage = () => {
  const [textButton, setTextButton] = useState("Bom dia");
  const [loading, setLoading] = useState(false);
  const [subscriptionJson, setSubscriptionJson] = useState("");
  const [swRegistration, setSwRegistration] = useState<any>(null);

  let isSubscribed = false;
  const applicationServerPublicKey = process.env
    .NEXT_PUBLIC_APPLICATION_SERVER_PUBLIC_KEY as string;

  function urlB64ToUint8Array(base64String: string) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  function updateSubscriptionOnServer(subscription: any) {
    // TODO: Send subscription to application server

    if (subscription) {
      setSubscriptionJson(JSON.stringify(subscription));
    } else {
      setSubscriptionJson("");
    }
  }

  function subscribeUser() {
    const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
    swRegistration.pushManager
      .subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey,
      })
      .then(function (subscription: any) {
        console.log("User is subscribed:", subscription);

        updateSubscriptionOnServer(subscription);

        isSubscribed = true;

        updateBtn();
      })
      .catch(function (err: any) {
        console.log("Failed to subscribe the user: ", err);
        updateBtn();
      });
  }

  function updateBtn() {
    if (Notification.permission === "denied") {
      setTextButton("Push Messaging Blocked.");
      setLoading(true);
      updateSubscriptionOnServer(null);
      return;
    }

    if (isSubscribed) {
      setTextButton("Disable Push Messaging");
    } else {
      setTextButton("Enable Push Messaging");
    }

    setLoading(false);
  }

  useEffect(() => {
    function initializeUI() {
      swRegistration.pushManager
        .getSubscription()
        .then(function (subscription: any) {
          isSubscribed = !(subscription === null);

          if (isSubscribed) {
            console.log("User IS subscribed.");
          } else {
            console.log("User is NOT subscribed.");
          }

          updateBtn();
        });
    }
    function VerifyRegSW() {
      if ("serviceWorker" in navigator && "PushManager" in window) {
        console.log("Service Worker and Push is supported");

        navigator.serviceWorker
          .register("sw.js")
          .then(function (swReg) {
            console.log("Service Worker is registered", swReg);
            setSwRegistration(swReg);
            initializeUI();
          })
          .catch(function (error) {
            console.error("Service Worker Error aqui", error);
          });
      } else {
        console.warn("Push messaging is not supported");
        setTextButton("Push Not Supported");
      }
    }
    VerifyRegSW();
  }, [swRegistration]);

  return (
    <Container>
      <Head>
        <title>About</title>
      </Head>
      {subscriptionJson}
      <button
        disabled={loading}
        onClick={function () {
          setLoading(true);
          if (isSubscribed) {
            // TODO: Unsubscribe user
          } else {
            subscribeUser();
          }
        }}
      >
        {textButton}
      </button>
      <Content>
        <Menu />
        <AboutMe />
        <Footer />
      </Content>
    </Container>
  );
};

export default Home;
