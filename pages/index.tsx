import type { NextPage } from "next";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { Container, Content } from "../styles/index";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>About</title>
      </Head>
      <Content>
        <Menu />
        <AboutMe />
        <Footer />
      </Content>
    </Container>
  );
};

export default Home;
