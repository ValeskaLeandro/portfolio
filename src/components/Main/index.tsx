// Styles
import { MainContainer } from "./styled";

// Sections
import Home from "../sections/Home";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Skills from "../sections/Skills";
import About from "../sections/About";

//Data
import { projects, skills } from "../../data/data"

export default function Main() {
  return(
    <MainContainer>
      <Home />
      <About />
      <Skills skills={skills}/>
      <Projects projects={projects}/>
      <Contact />
    </MainContainer>
  )
}