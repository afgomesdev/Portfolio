import Image from "next/image";
import { Container, Content, About, AboutSection } from "./styles";
import myPic from "../../public/me.jpg";
export function AboutMe(): JSX.Element {
  return (
    <Container>
      <Content>
        <h1>By my side</h1>
        <About>
          <AboutSection>
            <Image
              src={myPic}
              layout="fixed"
              height={433}
              width={336}
              quality={100}
              alt="My Pic"
            />
          </AboutSection>
          <AboutSection>
            <p>
              Ola, me chamo <strong>André Gomes</strong>. Iniciei na carreira de
              TI por volta de 2016 como estágiario desenvolvendo em .NET e hoje
              atuo como front-end com React.JS.
            </p>
            <p>
              Sou apaixonado em <strong>compartilhar</strong> conhecimentos com
              as pessoas <strong>ao meu lado</strong>, principalmente para
              validar meu conhecimento, afinal, se explicarmos para as pessoas
              nossos novos conhecimentos, elas podem nos questionar de algum
              ponto que não tinhamos pensado antes e assim retornamos aos
              estudos.
            </p>
            <p>
              Quando não estou trabalhando gosto de jogar com amigos, ouvir
              musica, bater um bom papo no discord ou em algum pub.
            </p>
          </AboutSection>
        </About>
      </Content>
    </Container>
  );
}

export default AboutMe;
