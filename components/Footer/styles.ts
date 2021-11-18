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
    border: 1px solid var(--clr-bgd);
    border-radius: 0.2rem;
    padding: 0.2rem;
    &:hover,
    &:focus {
      border-color: #fff;
    }

    span {
      gap: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
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
