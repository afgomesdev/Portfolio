import Head from "next/head";

import { Container, Content } from "../../styles/playground";
import Menu from "../../components/Menu";
import Halloween from "../../components/CandyBay";
import Lighsaber from "../../components/Lighsaber";
import GradientAnimation from "../../components/GradientAnimation";
import { CardAnimation } from "../../components/CardAnimation";
import Ticket from "../../components/Ticket";
import YinYang from "../../components/YinYang";
import Footer from "../../components/Footer";

export function Playground(): JSX.Element {
  return (
    <>
      <Head>
        <title>Playground</title>
      </Head>
      <Container>
        <Menu />
        <Content>
          <Halloween />
          <hr />
          <Lighsaber />
          <hr />
          <GradientAnimation />
          <hr />
          <CardAnimation />
          <hr />
          <Ticket />
          <hr />
          <YinYang />
        </Content>
        <Footer />
      </Container>
    </>
  );
}

export default Playground;
