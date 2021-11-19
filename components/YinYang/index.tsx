import { Container, Wrapper, Circle, YinyangCircle } from "./styles";
export function YinYang(): JSX.Element {
  return (
    <Container>
      <Wrapper>
        <Circle>
          <YinyangCircle />
          <YinyangCircle />
        </Circle>
      </Wrapper>
    </Container>
  );
}

export default YinYang;
