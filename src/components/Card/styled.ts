import styled from "styled-components";

export const CardProject = styled.div`
  width: 100%;
  display: flex;
  background-color: ${props => props.theme.colors.secundaryBackground};
  padding: 3rem;
  gap: 2rem;
  border-radius: 15px;
  position: relative;

  .image {
    width: 100%;
    flex: 1;
    img {
      width: 100%;
      max-width: 450px;
      object-fit: cover;
      aspect-ratio: 16/9;
      @media (max-width: 998px) {
        max-width: 100%;
      } 
    }
  }
  .info {
    flex: 2;
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    h2{
      font-size: 2rem;
      color: ${props => props.theme.colors.title};
    }

    @media (max-width: 998px) {
      flex-direction: column;
      gap: .5rem;
      align-items: end;
    
    }
  }

  .links {
    display: flex;
    gap: 1rem;
  }
  

  p {
    font-size: 1.4rem;
    text-align: justify; 
    margin-bottom: 2rem;
  }

  a {
    svg {
      font-size: 2.5rem;
      color: ${props => props.theme.colors.secundaryColor};
      transition: .4s;
    }

    &:hover svg {
      color: ${props => props.theme.colors.primaryColor};
    }
  }

  .tech {
    width: 100%;
    justify-content: end;
    display: flex;
    align-items: center;
    gap: .5rem;
    position: absolute;
    bottom:10px;
    right: 20px;
    svg {
      font-size: 3rem;
      color: ${props => props.theme.colors.text};
      transition: .4s;

      &:hover {
        color: ${props => props.theme.colors.secundaryColor};
      }
    }
  }

  @media (max-width: 998px) {
    flex-direction: column;
    min-height: 650px;

    .image,
    .info {
      flex: initial;
    }
    h2{
      font-size: 1.5rem;
    }
    a  svg {
      font-size: 2rem;
    }
  }

`

