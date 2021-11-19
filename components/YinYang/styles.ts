import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
`;

export const Circle = styled.div`
  margin-top: 3rem;
  box-sizing: border-box;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  padding-left: 50px;
  background-image: linear-gradient(
    to left,
    #fff,
    #fff 50%,
    var(--clr-bgd) 50%,
    var(--clr-bgd)
  );
  animation: roll 10s linear infinite;
`;

export const YinYangCircle = styled.div`
  position: relative;
  background: #fff;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-image: linear-gradient(
    to left,
    #fff,
    #fff 50%,
    var(--clr-bgd) 50%,
    var(--clr-bgd)
  );
  animation: roll 4s linear infinite;
  animation-direction: reverse;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border: 18px solid #000;
    border-radius: 50%;
    width: 14px;
    height: 14px;
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border: 18px solid #fff;
    border-radius: 50%;
    width: 14px;
    height: 14px;
  }

  @keyframes roll {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
`;
