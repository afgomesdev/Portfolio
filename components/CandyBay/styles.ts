import styled, { css, keyframes } from "styled-components";

const Flasher = keyframes`
    0% {
      opacity: 0;
    }
    3% {
      opacity: 1;
    }
    5% {
      opacity: 0;
    }
    7% {
      opacity: 1;
    }
    9% {
      opacity: 0;
    }
    11% {
      opacity: 1;
    }
    13% {
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    17% {
      opacity: 0;
    }
    90% {
      opacity: 1;
    }
    91% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

const GrowUpWidth = (maxWidth: string) => keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${maxWidth};
  }
`;

const GrowUpHeight = (maxHeight: string) => keyframes`
  0% {
    height: 0;
  }
  100% {
    height: ${maxHeight};
  }
`;

const curveElement = css<StickProps>`
  ::after {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    height: 1rem;
    width: ${({ width }) => width};
    background-color: white;
    box-shadow: 0 0 15px white;
    border-radius: 50px / 5rem;

    animation-name: ${({ width }) => GrowUpWidth(width)};
    animation-duration: 4s;
    animation-fill-mode: forwards;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

interface MenuProps {
  borderColor: string;
}

export const Menu = styled.strong<MenuProps>`
  position: relative;
  left: 21rem;
  top: 3rem;
  min-width: 80px;
  margin-left: 0.5rem;
  padding: 0.3rem;
  text-align: center;
  border-radius: 0.5rem;
  border: 3px solid ${({ borderColor }) => borderColor};

  animation-name: ${Flasher};
  animation-duration: 4s;
  animation-fill-mode: forwards;

  &:hover {
    cursor: pointer;
    background-color: ${({ borderColor }) => borderColor};
  }
`;

export const Content = styled.div`
  position: relative;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

interface StickProps {
  height: string;
  width: string;
  weight: string;
  position: "absolute" | "relative";
  top?: string;
  left?: string;
  curve: boolean;
}

export const Stick = styled.div<StickProps>`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  height: 0;
  width: ${({ weight }) => weight};
  background-color: white;
  box-shadow: 0 0 15px white;
  border-radius: 50px / 5rem;

  animation-name: ${({ height }) => GrowUpHeight(height)};
  animation-duration: 4s;
  animation-fill-mode: forwards;

  ${({ curve }) => curve && curveElement}

  span {
    position: relative;
    display: block;
    color: #fdf330;
    font-size: 5rem;
    font-weight: 900;
    margin-left: 2rem;
    margin-top: 1.5rem;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    animation-name: ${Flasher};
    animation-duration: 4s;
    animation-fill-mode: forwards;
  }

  > div {
    display: flex;
    margin-left: 538px;
    justify-content: center;
    align-items: center;

    animation-name: ${Flasher};
    animation-delay: 4s;
    animation-duration: 4s;
    animation-fill-mode: forwards;
  }
`;

export const Circle = styled.div`
  min-width: 1rem;
  min-height: 1rem;
  margin-left: 0.2rem;
  background-color: ${({ color }) => color};
  border-radius: 50%;
`;
