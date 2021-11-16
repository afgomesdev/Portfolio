import Footer from "../../components/Footer";
import Lighsaber from "../../components/Lighsaber";
import GradientAnimation from "../../components/GradientAnimation";
import Menu from "../../components/Menu";
import { Container, Content } from "../../styles/playground";
import Head from "next/head";
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
        </Content>
        <Footer />
      </Container>
    </>
  );
}

export default Playground;
