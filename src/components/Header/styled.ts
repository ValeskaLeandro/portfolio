import styled from "styled-components"

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1500px;
  height: 8rem;
  background-color: ${props => props.theme.colors.primaryBackground};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3rem;
  padding: 3rem;

`
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-list {
    display: flex;
    gap: 2rem;
    list-style: none;

    & li:not(:last-child){
      position: relative;
      
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 3px;
        background-color: ${props => props.theme.colors.primaryColor};
        transition: .5s;
      }

      &:hover::before {
        width: 100%;
      }
    }
    .dropdown {      
      position: relative;
    }
    .dropdown .menu-dropdown {
      list-style: none;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;      
      position: absolute;
      gap: .5rem;
      right: 0;
      z-index: 3;
      border-radius: 5px;
      background-color: ${props => props.theme.colors.primaryColor};
      padding: 1rem;
    }
  }

  .nav-list a {
    font-size: 1.6rem;
    color: ${props => props.theme.colors.title};
    font-weight: 500;
    padding-block: 1rem;
    text-decoration: none;
    transition: .4s;

    &:hover {
      color: ${props => props.theme.colors.secundaryColor};
    }    
  }

  @media (max-width: 998px) {
    .nav-list {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: ${props => props.theme.colors.secundaryBackground};
      clip-path: circle(50px at 90% -20%);
      transition: 1s ease-out;
      z-index: 1;
      flex-direction: column;
      align-items: center;
      gap: 5rem;
      padding: 5rem 0;
      pointer-events: none;
    }

    &.active .nav-list {
      clip-path: circle(1500px);
      pointer-events: all;
    }

    &.active .nav-list a {
      color: ${props => props.theme.colors.title};
    }

    &.active button {
      border-top-color: transparent;
    }

    &.active button::before {
      transform: rotate(135deg);
    }

    &.active button::after {
      transform: rotate(-135deg);
      top: -7px;
    }
  }
`

export const MenuHamburguer = styled.button`
  display: none;
  border: none;
  background: none;
  border-top: 2px solid ${props => props.theme.colors.secundaryColor};
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 25px;
    height: 2px;
    margin-top: 5px;
    background-color: ${props => props.theme.colors.secundaryColor};
    position: relative;
    transition: .5s;
  }

  @media (max-width: 998px) {
    display: block;
    z-index: 2;
  }
`