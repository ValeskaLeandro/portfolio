import { useState } from "react"
import { HeaderContainer, MenuHamburguer, Nav } from "./styled"
import Logo from "../../components/Logo"
import { IButtonChangeTheme } from "../../utils/interfaces"
import ButtonTheme from "../ButtonTheme";

export default function Header({ toggleTheme, checked }: IButtonChangeTheme) {
  const [openMenu, setOpenMenu] = useState(false)
  const toggleMenu = () => setOpenMenu(!openMenu);

  return(
    <HeaderContainer>
      <Logo />
        <Nav className={openMenu ? 'active' : '' }>
          <MenuHamburguer onClick={toggleMenu} />
          <ul className="nav-list"> 
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>Sobre mim</a></li>
            <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projetos</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contato</a></li>
            <li>
              <ButtonTheme toggleTheme={toggleTheme} checked={checked} />
            </li>
          </ul>
      </Nav>
    </HeaderContainer>
  )
}