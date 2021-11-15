import Link from "next/link";
import { RiGithubLine, RiLinkedinLine, RiCodeLine } from "react-icons/ri";
import { Container, Content } from "./styles";

export function Footer(): JSX.Element {
  const chanels = [
    {
      id: 1,
      title: "Source",
      link: "",
      icon: <RiCodeLine />,
    },
    {
      id: 1,
      title: "LikedIn",
      link: "https://linkedin.com/in/andre-felipe-benedetti-gomes-a282071b0",
      icon: <RiLinkedinLine />,
    },
    {
      id: 1,
      title: "Github",
      link: "https://github.com/afgomesdev",
      icon: <RiGithubLine />,
    },
  ];
  return (
    <Container>
      <Content>
        {chanels.map((chanel) => (
          <Link href={chanel.link} key={chanel.id}>
            <a>
              <span>
                {chanel.title} {chanel.icon}
              </span>
            </a>
          </Link>
        ))}
      </Content>
    </Container>
  );
}

export default Footer;
