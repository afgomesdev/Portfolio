import Footer from "../../components/Footer";
import Lighsaber from "../../components/Lighsaber";
import GradientAnimation from "../../components/GradientAnimation";
import Menu from "../../components/Menu";
import { Container, Content } from "../../styles/playground";
import Head from "next/head";
import { CardAnimation } from "../../components/CardAnimation";
import Ticket from "../../components/Ticket";

export function Playground(): JSX.Element {
  return (
    <>
      <Head>
        <title>Playground</title>
      </Head>
      <Container>
        <Menu />
        <Content>
          <Lighsaber />
          <hr />
          <GradientAnimation />
          <hr />
          <CardAnimation />
          <hr />
          <Ticket />
        </Content>
        <Footer />
      </Container>
    </>
  );
}

export default Playground;
