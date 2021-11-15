import Link from "next/link";
import { Container } from "./styles";

export function Menu(): JSX.Element {
  const menus = [
    {
      id: 1,
      title: "About",
      link: "/",
    },
    {
      id: 2,
      title: "Playground",
      link: "/",
    },
  ];
  return (
    <Container>
      {menus.map((menu) => (
        <Link key={menu.id} href={menu.link} passHref>
          <a>{menu.title}</a>
        </Link>
      ))}
    </Container>
  );
}
export default Menu;
