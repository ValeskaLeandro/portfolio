import styled from "styled-components"

export const HomeSection = styled.section`
  height: calc(100vh - 8rem);
  align-items: center;
  justify-content: center;
  
  .arrow {
    fill: ${props => props.theme.colors.secundaryColor};
    font-size: 2.5rem;
    position: absolute;
    bottom: 5rem;
    animation: bounce 1s infinite alternate ease-in-out;

    @media (max-width: 60rem) {
      font-size: 1.7rem;
      bottom: 3rem;
    }
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(10px);
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    width: 100%;

    span {
      color: ${props => props.theme.colors.title};
      font-size: 2.4rem;
      font-weight: 500;
    }

    h1 {
      color: ${props => props.theme.colors.primaryColor};
      font-size: 4.8rem;

      span {
      color: ${props => props.theme.colors.secundaryColor};
      font-size: 4.8rem;      
      }
    }

    .Typewriter span {
      font-weight: 300;
      font-size: 3.2rem;
      padding-bottom: 1rem;
    }
    p {
      font-size: 1.4rem;
      font-weight: 300;
      padding-bottom: 1rem;
    }

    .infos {
      display: flex;
      gap: 3rem;

      span {
        font-size: 1.6rem;
      }

      svg {
        fill: ${props => props.theme.colors.secundaryColor};
        font-size: 1.6rem;
      }
    }
    img {
      max-width: 40rem;
      height: 100%
    }

    .left-content .button {
      margin-top: 2rem;
      display: flex;
      justify-content: center;
    }

    .rigth-content {
      display: flex;
      gap: 2rem;
      justify-content: center;
      align-items: center;

      .socialMedia {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        & a svg {
          transition: .5s;
          &:hover {
            fill: #13EBF2;
            filter: drop-shadow(0 0 10px #0C9499);
            transform: scale(1.1)
          }
        }
      }
      .socialMedia svg {
        fill: ${props => props.theme.colors.secundaryColor};
        font-size: 3rem;
      }
    }
    

    @media (max-width: 1000px) {
    & {
      flex-direction: column-reverse;
      align-items: center;

      h1 {
        font-size: 3rem;

        span {
        font-size: 3rem;      
        }
      }

      .Typewriter span {
        font-size: 2.5rem;
      }
    }
    }

  @media (max-width: 600px) {
    & {
      img {
        width: 50%;
        min-width: 180px;
      }
      span {
      font-size: 1.7rem;
      }

      h1 {
        font-size: 2rem;

        span {
        font-size: 2rem;      
        }
      }

      .Typewriter span {
        font-size: 1.5rem;
      }
      p {
        font-size: 1.2rem;
      }

      .infos {
        flex-direction: column;
        gap: .5rem;

        span, svg {
          font-size: 1.2rem;
        }
      }
    }
  }    
}

`