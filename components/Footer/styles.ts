import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Content = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  padding: 1rem;
  a {
    &:hover,
    &:focus {
      font-weight: 800;
    }

    span {
      gap: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      display: none;
    }

    transition: font-weight 100ms linear, width 100ms linear;

    span:hover,
    span:focus {
      svg {
        display: unset;
      }
    }
  }
`;
