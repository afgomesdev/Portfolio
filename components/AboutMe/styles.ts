import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--max-width-container);

  h1 {
    font-weight: 800;
    font-size: 3rem;
    background-image: linear-gradient(
      0deg,
      var(--clr-purple) 0,
      var(--clr-orange) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    box-decoration-break: clone;
  }
  h1::selection {
    background: var(--clr-purple);
    -webkit-text-fill-color: #000;
    color: #000;
  }
`;

export const About = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  text-align: justify;
  @media (max-width: 940px) {
    flex-direction: column;
  }
`;

export const AboutSection = styled.div`
  img {
    border-radius: 0.25em;
  }

  p {
    line-height: 1.5rem;
    font-weight: 200;
  }

  p::selection {
    color: #09080c;
    background: var(--clr-orange2);
  }

  strong::selection {
    color: #777;
    background: #444;
  }

  img::selection {
    color: #777;
    background: #444;
  }
`;
