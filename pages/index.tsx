import type { NextPage } from "next";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { Container } from "../styles/index";

const Home: NextPage = () => {
  return (
    <Container>
      <Menu />
      <AboutMe />
      <Footer />
    </Container>
  );
};

export default Home;
