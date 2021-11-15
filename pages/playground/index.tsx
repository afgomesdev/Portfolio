import Lighsaber from "../../components/Lighsaber";
import { Container, Content } from "./styles";
export function Playground(): JSX.Element {
  return (
    <Container>
      <Content>
        <Lighsaber />
      </Content>
    </Container>
  );
}

export default Playground;
