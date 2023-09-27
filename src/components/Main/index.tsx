// Styles
import { MainContainer } from "./styled";

// Sections
import Home from "../sections/Home";
import Projects from "../sections/Projects";

//Data
import { projects, skills } from "../../data/data"
import Contact from "../sections/Contact";
import Skills from "../sections/Skills";

export default function Main() {
  return(
    <MainContainer>
      <Home />
      <Skills skills={skills}/>
      <Projects projects={projects}/>
      <Contact />
    </MainContainer>
  )
}