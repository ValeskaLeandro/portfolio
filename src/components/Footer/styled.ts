import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.colors.primaryColor};
  display: flex;
  justify-content: center;
  padding: 5rem 0;
  
  .content {
    width: 80%;
    max-width: 1500px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p, p > a {
      font-size: 1.4rem;
    }

    p > a  {
      text-decoration: none;
      color: ${props => props.theme.colors.secundaryColor};

      &:hover {

      }
    }

    p {
      color: ${props => props.theme.colors.white}

    }

    .logo {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .copy {
      display: flex;
      flex-direction: column;
      gap: .5rem;
      align-items: end;

      a > img {
        max-width: 120px;
      }

      @media (max-width: 998px) {
        align-items: center;

        p {
          text-align: center;
        }
      }
    }

    @media (max-width: 998px) {
      flex-direction: column;
      gap: 2rem;
    }
  }

`

export const SocialMedia = styled.div`
  display: flex;
  gap: .5rem;
  margin-top: .5rem;

  a {
    text-decoration: none;
    transition: .4s;
    color: ${props => props.theme.colors.secundaryColor};

    svg {
      font-size: 3rem;
    }

    &:hover {
      fill: #13EBF4;
      filter: drop-shadow(0 0 10px #0C9499);
      transform: scale(1.1)
    }
  }
`