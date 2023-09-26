// Styles
import { HomeSection } from "./styled"

// Components
import MainButton from "../../MainButton";

// Utilities
import Typewriter from 'typewriter-effect';
import { TfiAngleDoubleDown } from "react-icons/tfi";
import { AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { GoPaperAirplane } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";

export default function Home ()  {
  return(
    <HomeSection id="home" className="container">
      <div className="content">
        <div className="left-content">
          <span>Olá, eu sou</span>
          <h1>Valeska Leandro <span>.</span></h1>
          <Typewriter
            options={{
              strings: [
              'Desenvolvedora Front-end', 
              'Front-end Developer',
              'Desenvolvedora ReactJS'
            ],
              autoStart: true,
              loop: true,
            }}
          />
          <p>Uma profissional focada em trazer o que sua empresa precisa.</p>
          <div className="infos">
            <span className="location">
              <FaLocationDot /> Fortaleza-CE
            </span>
            <span className="availability">
              <LiaCheckDoubleSolid /> Disponível para trabalhos
            </span>
          </div>
          <div className="button">
            <MainButton text="Vamos trabalhar juntos" icon={GoPaperAirplane} link="#contact"/>
          </div>
        </div>
        <div className="rigth-content">
          <img src="./image-main.svg" alt="Valeska Leandro - Desenvolvedora Front-end" />
          <div className="socialMedia">
            <a href="https://www.linkedin.com/in/valeskaleandro/" target="_blank"><AiFillLinkedin /></a>
            <a href="https://github.com/ValeskaLeandro" target="_blank"><AiOutlineGithub /></a>
            <a href="https://www.instagram.com/valeskaleandro/" target="_blank"><AiOutlineInstagram /></a>
            <span></span>
          </div>
        </div>
      </div>
      <TfiAngleDoubleDown className="arrow"/>
    </HomeSection>
  )
}