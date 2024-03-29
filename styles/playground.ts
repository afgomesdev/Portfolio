import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  padding-top: 6rem;
  max-width: var(--max-width-container);

  hr {
    width: 100%;
    color: white;
  }
`;
