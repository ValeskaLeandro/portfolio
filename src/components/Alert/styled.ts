import styled from "styled-components";

export const AlertContainer = styled.div`
  padding: 2rem;
  background-color: ${props => props.theme.colors.secundaryBackground};
  position: fixed;
  top: 20px;
  right: 20px;
  color: #7CC910;
  z-index: 4;

  p {
    font-size: 1.6rem;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #7CC910;
    animation: decreaseWidth 4s linear forwards;
  }

  &.error {
  color: #B8002B;
  &::before {
    background-color: #B8002B;
  }
  }

  @keyframes decreaseWidth {
    from {
      width: 100%;
    }
    to {
      width: 0;
    }
  }
`