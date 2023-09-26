import styled from "styled-components";


export const ButtonChangeTheme = styled.div`
  padding-top: .5rem;

  .switch {
    display: flex;
    align-items: center; 
    margin-bottom: 1rem;
    gap: .3rem;
  }

  .switch input[type="checkbox"] {
    width: .01rem;
    height: .01rem;
    position: absolute;
    left: 50%;
    outline: none;
  }

  .switch input[type="checkbox"]+span {
    display: inline-block;
    width: 3.2rem;
    height: 1.7rem;
    border: .1rem solid ${props => props.theme.colors.primaryColor};
    border-radius: 1rem;
  }
  
  .switch input[type="checkbox"]+span::after {
    content: "";
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primaryColor};
    transition: .5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .switch input[type="checkbox"]:checked+span::after{
    transform: translateX(100%);
    background-color: ${props => props.theme.colors.secundaryColor};
    
  }

  .switch input[type="checkbox"]:checked+span {
    background-color: ${props => props.theme.colors.secundaryBackground};
  }
    
`