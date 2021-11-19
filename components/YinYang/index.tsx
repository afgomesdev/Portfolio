import { Container, Wrapper, Circle, YinYangCircle } from "./styles";
export function YinYang(): JSX.Element {
  return (
    <Container>
      <Wrapper>
        <Circle>
          <YinYangCircle />
          <YinYangCircle />
        </Circle>
      </Wrapper>
    </Container>
  );
}

export default YinYang;
