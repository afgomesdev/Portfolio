import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  bottom: 3rem;
  right: 3rem;
  border: 1px solid #fff;
  height: 40px;
  width: 40px;
  transition: all 500ms ease;
`;

export const Content = styled.div`
  position: relative;
  border-radius: 0.5rem;
  padding: 256px 180px 1rem 420px;
  border: 1px solid #fff;
  overflow: hidden;

  span.left {
    position: absolute;
    font-size: 1.3rem;
    writing-mode: vertical-lr;
    top: 2rem;
    right: 4rem;
  }

  span.center {
    font-size: 4rem;
  }

  span.dashed {
    position: absolute;
    top: 0;
    left: 140px;
    border-left: 1px dashed #fff;
    height: 100%;
    width: 1px;
  }

  &:hover > ${Circle} {
    -webkit-transform: scale(15);
    transform: scale(15);
    background-color: #fff;
    border: none;
    opacity: 0.5;
  }

  ::after {
    content: "";
    position: absolute;
    top: -15px;
    left: 126px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
  }

  ::before {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 126px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
  }
`;
