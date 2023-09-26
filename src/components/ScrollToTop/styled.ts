import styled from "styled-components"

export const ButtonTop = styled.button`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.secundaryColor};
  color: ${props => props.theme.colors.white};
  border-radius: 50%;
  border: none;
  transition: 0.5s ease-in-out;
  
  position: fixed;
  z-index:2;
  right: 2rem;
  bottom: 2rem;
  visibility: hidden;
  opacity: 0;
  cursor: pointer;

  &.show_button {
    visibility: visible;
    opacity: 1;
  }
`;