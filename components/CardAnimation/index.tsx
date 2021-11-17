import Image from "next/image";
import { Container, Card, CardContent } from "./styles";

export function CardAnimation(): JSX.Element {
  return (
    <Container>
      <Card>
        <Image
          alt="Mountains"
          src="/mountains.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <CardContent>
          <h2>Something awesome</h2>
          <p>
            Lorem ipsum dolor sit amet consectrtiur addipisicing elit. Fugiat
            rem facilis.
          </p>
          <a href="#" className="button">
            Learn More
          </a>
        </CardContent>
      </Card>
    </Container>
  );
}
