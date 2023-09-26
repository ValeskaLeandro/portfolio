import styled from "styled-components";

export const Link = styled.a`
  font-size: 1.6rem;
  font-weight: 600;
  text-decoration: none;
  border: 2px solid ${props => props.theme.colors.primaryColor};
  border-radius: 15px;
  color: ${props => props.theme.colors.primaryColor};
  padding: .5rem 2rem;
  display: flex;
  align-items: center;
  gap: .8rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: .5s;


  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: ${props => props.theme.colors.primaryColor};
    width: 0;
    height: 100%;
    z-index: -1;
    transition: .4s ease-in-out;
      
  }

  &:hover {
    color: ${props => props.theme.colors.white};

    .icon svg {
      fill: ${props => props.theme.colors.white};
    }

    &::before {
      width: 100%;
    }
  }

  .icon {
    animation: animation 1s infinite alternate ease-in-out;

    svg {
      fill: ${props => props.theme.colors.primaryColor}
    }
  }
  

  @keyframes animation {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(8px);
    }
  }

  @media (max-width: 698px) {
    font-size: 1.2rem;    
  }

`