import Footer from "../../components/Footer";
import Lighsaber from "../../components/Lighsaber";
import Menu from "../../components/Menu";
import { Container, Content } from "../../styles/playground";
export function Playground(): JSX.Element {
  return (
    <Container>
      <Menu />
      <Content>
        <Lighsaber />
      </Content>
      <Footer />
    </Container>
  );
}

export default Playground;
