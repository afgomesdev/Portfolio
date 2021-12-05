import { Container, Content, Menu, Stick, Circle } from "./styles";

export default function CandyBay() {
  return (
    <Container>
      <Content>
        <Stick
          position="absolute"
          height="680px"
          width=""
          weight="1rem"
          curve={false}
        />
        <Stick
          top="132px"
          left="2rem"
          position="absolute"
          height="550px"
          width="500px"
          weight="1rem"
          curve
        >
          <div>
            <Circle color="#41acd6" />
            <Circle color="#d641ce" />
            <Circle color="#fff45b" />
          </div>
        </Stick>
        <Stick
          top="164px"
          left="4rem"
          position="absolute"
          height="518px"
          width="536px"
          weight="1rem"
          curve
        >
          <span>CANDYBAY</span>
          <Menu borderColor="#41acd6">Login</Menu>
          <Menu borderColor="#d641ce">Shop</Menu>
          <Menu borderColor="#fff45b">FAQ</Menu>
        </Stick>
        <Stick
          top={"302px"}
          left={"6rem"}
          position={"absolute"}
          height={`380px`}
          width={"502px"}
          weight={"1rem"}
          curve
        />
      </Content>
    </Container>
  );
}
