import styled from "styled-components"

export const ContactForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  form {
    width: 100%;
    max-width: 600px;
  }
  .input-group{
    position: relative;
  }

  input:not(:last-child), textarea {
    font-size: 1.6rem;
    width: 100%;
    border: 2px solid ${props => props.theme.colors.primaryColor};
    border-radius: 1rem;
    background: none;
    padding: 1rem;
    transition: .15s cubic-bezier(.4, 0, .2, 1);
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.text};
    
    @media (max-width: 998px) {
      font-size: 1.4rem;  
    }
  }

  label {
    font-size: 1.6rem;
    position: absolute;
    left: 16px;
    pointer-events: none;
    transform: translateY(1rem);
    transition: .15s cubic-bezier(.4, 0, .2, 1);

    @media (max-width: 998px) {
      font-size: 1.4rem;  
    }
  }

  input:focus, 
  textarea:focus {
    outline: none;
    border: 2px solid ${props => props.theme.colors.primaryColor};
  }

  input:focus ~ label, 
  textarea:focus ~ label, 
  input:not(:placeholder-shown) ~ label, 
  textarea:not(:placeholder-shown) ~ label  {
    transform: translateY(-50%) scale(.8);
    background-color: ${props => props.theme.colors.primaryBackground};
    padding: 0 .2rem;
    color: ${props => props.theme.colors.primaryColor};
  }

  .contacts {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;
    max-width: 100%;
    h2 {
      font-size: 2rem;
      color: ${props => props.theme.colors.title};
      @media (max-width: 998px) {
        font-size: 1.6rem;  
      }
    }
    .titles {
      margin-bottom: 2rem;
      p {
        font-size: 1.6rem;
        
        @media (max-width: 998px) {
          font-size: 1.2rem;  
        }
      }
    }
    a {
      width: 100%;
      font-size: 1.6rem;
      display: flex;
      gap: .5rem;
      align-items: center;
      color: ${props => props.theme.colors.text};
      text-decoration: none;
      transition: .4s;

      @media (max-width: 998px) {
        font-size: 1.2rem;  
      }

      svg {
        font-size: 2.5rem;
        color: ${props => props.theme.colors.secundaryColor};
        @media (max-width: 998px) {
          font-size: 2rem; 
        }
      }

      &:hover {
        transform: scale(1.05);
        color: ${props => props.theme.colors.primaryColor};
      }
    }
  }

  .button {
    display: flex;
    justify-content: end;
  }

  @media (max-width: 998px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const ButtonForm = styled.input`
  width: 150px;
  font-size: 1.6rem;
  font-weight: 600;
  border: 2px solid ${props => props.theme.colors.primaryColor};
  border-radius: 15px;
  color: ${props => props.theme.colors.primaryColor};
  padding: 1rem 2rem;
  cursor: pointer;
  transition: .5s;
  background: none;

  &:hover {
    background-color: ${props => props.theme.colors.primaryColor};
    color: ${props => props.theme.colors.white};
    filter: drop-shadow(0 0 6px #5D00B7);
  }
`