import styled from "styled-components"
export const Logotype = styled.div`
  h1 {
    font-size: 2rem;
    color: ${props => props.theme.colors.title};

    .bar {
      color: ${props => props.theme.colors.secundaryColor}
    }

    span {
      font-size: 2rem;
    }

    .sinal { 
      color: ${props => props.theme.colors.primaryColor};
    }
  }
  &.footer {
    h1 {
      color: #fff;
    }

    .sinal {
      color: ${props => props.theme.colors.black};
    }
  }

`