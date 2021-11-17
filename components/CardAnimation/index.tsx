import Image from "next/image";
import Link from "next/link";

import { rgbDataURL } from "../../helpers/DataUrl";

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
          placeholder="blur"
          blurDataURL={rgbDataURL(55, 55, 55)}
        />
        <CardContent>
          <h2>Something awesome</h2>
          <p>
            Lorem ipsum dolor sit amet consectrtiur addipisicing elit. Fugiat
            rem facilis.
          </p>
          <Link href="#" passHref>
            <a>Learn More</a>
          </Link>
        </CardContent>
      </Card>
    </Container>
  );
}
