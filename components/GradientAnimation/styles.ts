import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: var(--gradient);
  background-size: 400%;
  animation: bg-animation 20s infinite alternate;

  h1 {
    font-size: 5rem;
  }

  @keyframes bg-animation {
    0% {
      background-position: left;
    }
    100% {
      background-position: right;
    }
  }
`;
