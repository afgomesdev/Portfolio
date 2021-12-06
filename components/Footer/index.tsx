import Link from "next/link";
import { RiGithubLine, RiLinkedinLine, RiCodeLine } from "react-icons/ri";
import { Container, Content } from "./styles";

export function Footer(): JSX.Element {
  const channels = [
    {
      id: 1,
      title: "Source",
      link: "https://github.com/afgomesdev/Portifolio",
      icon: <RiCodeLine />,
    },
    {
      id: 2,
      title: "LikedIn",
      link: "https://linkedin.com/in/andre-felipe-benedetti-gomes-a282071b0",
      icon: <RiLinkedinLine />,
    },
    {
      id: 3,
      title: "Github",
      link: "https://github.com/afgomesdev",
      icon: <RiGithubLine />,
    },
  ];
  return (
    <Container>
      <Content>
        {channels.map((channel) => (
          <Link href={channel.link} key={channel.id}>
            <a>
              <span>
                {channel.title} {channel.icon}
              </span>
            </a>
          </Link>
        ))}
      </Content>
    </Container>
  );
}

export default Footer;
