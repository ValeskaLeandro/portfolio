// Styles
import { MainContainer } from "./styled";

// Sections
import Home from "../sections/Home";
import Projects from "../sections/Projects";

//Data
import { projects } from "../../data/projects"
import Contact from "../sections/Contact";

export default function Main() {
  return(
    <MainContainer>
      <Home />
      <Projects projects={projects}/>
      <Contact />
    </MainContainer>
  )
}