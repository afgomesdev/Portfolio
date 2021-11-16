import type { NextPage } from "next";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { Container } from "../styles/index";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Container>
        <Menu />
        <AboutMe />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
