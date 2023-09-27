import styled from "styled-components";

export const AboutContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  align-items: center;
  gap: 2rem;
  
  h2 {
    font-size: 2rem;
    text-align: center;
    color: ${props => props.theme.colors.primaryColor};
  }
  p {
    max-width: 800px;
    font-size: 1.6rem;
    text-align: center;

    span {
      font-size: 1.6rem;
      color: ${props => props.theme.colors.primaryColor};
      font-weight: 500;
      transition: .4s;

      &:hover {
        color: ${props => props.theme.colors.secundaryColor};          
      }
    }
  }

  @media (max-width: 998px) {
    h2 {
      font-size: 1.8rem;
    }

    p, span {
      font-size: 1.4rem;
    }
  }
`