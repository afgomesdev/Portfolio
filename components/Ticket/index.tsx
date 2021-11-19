import { Container, Content, Circle } from "./styles";
export function Ticket(): JSX.Element {
  return (
    <Container>
      <Content>
        <span className="center">North</span>
        <span className="left">North</span>
        <span className="dashed" />
        <Circle />
      </Content>
    </Container>
  );
}

export default Ticket;
