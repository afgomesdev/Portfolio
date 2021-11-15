import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  color: var(--clr-orange);

  a {
    display: inline-block;
    position: relative;

    font-size: 2rem;
    margin: 1rem;
    cursor: pointer;
    text-decoration: none;
    border: var(--clr-orange) 0.125em solid;
    padding: 0.25em 1em;
    border-radius: 0.25em;

    text-shadow: 0 0 0.12em hsl(0 0% 100% / 0.3), 0 0 0.4em currentColor;
    box-shadow: inset 0 0 0.5em 0 var(--clr-orange),
      0 0 0.5em 0 var(--clr-orange);

    transition: background-color 100ms linear;

    &::before {
      pointer-events: none;
      content: "";
      position: absolute;
      background: var(--clr-orange);
      top: 120%;
      left: 0;
      width: 100%;
      height: 100%;

      transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
      filter: blur(1em);
      opacity: 0.7;
    }

    &:hover,
    &:focus {
      background-color: var(--clr-orange);
      color: var(--clr-bgd);
      text-shadow: none;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      box-shadow: 0 0 2em 1em var(--clr-orange);
      opacity: 0;
      transition: opacity 100ms linear;
    }

    &:hover::before,
    &:focus::before {
      opacity: 1;
    }

    &:hover::after,
    &:focus::after {
      opacity: 1;
    }
  }

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
