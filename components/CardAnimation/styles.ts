import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  position: relative;
  color: var(--clr-neutral-100);
  padding: 10rem 0 0;
  max-width: 35ch;
  border-radius: 1rem;
  overflow: hidden;
  transition: transform 500ms ease;

  a,
  p,
  h2 {
    margin: 0;
    position: relative;
  }

  @media (hover) {
    &:hover h2::after,
    &:focus-within h2::after {
      transform: scaleX(1);
    }

    &:hover > div,
    &:focus-within > div {
      transition-delay: 500ms;
      transform: translateY(0);
    }

    &:hover,
    &:focus-within {
      transform: scale(1.05);
    }

    &:hover div > *:not(h2),
    :focus-within div > *:not(h2) {
      opacity: 1;
      transition-delay: 1s;
    }

    div > *:not(h2) {
      transition: opacity 500ms ease;
      opacity: 0;
    }
  }
`;

export const CardContent = styled.div`
  --padding: 1.5rem;
  padding: var(--padding);

  @media (hover) {
    transition: transform 500ms ease;
    transform: translateY(65%);
  }

  h2 {
    position: relative;
    width: max-content;
    margin-bottom: 1rem;
    &::after {
      content: "";
      position: absolute;
      height: 4px;
      width: calc(var(--padding) + 100%);
      left: calc(var(--padding) * -1);
      bottom: -2px;
      background: var(--clr-accent-400);
      transform-origin: left;
      transition: transform 1s ease;
      transform: scaleX(0);
    }
  }

  p {
    color: rgb(255 255 255 / 0.85);
  }

  a {
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    color: var(--clr-neutral-900);
    background: var(--clr-accent-400);
    padding: 0.5em 1.25em;
    border-radius: 0.25em;

    &:hover,
    &:focus {
      background: #fff;
    }
  }
`;
