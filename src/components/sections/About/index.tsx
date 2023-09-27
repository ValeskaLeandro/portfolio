// Components
import Title from "../../Title";

// Styles
import { AboutContent } from "./styled";

export default function About() {
  return(
    <section id="about" className="container">
      <Title title="Sobre mim" subtitle="<AboutMe/>" classname="end" />
      <AboutContent>
          <h2>Olá, eu sou Valeska. Prazer em conhecê-lo.</h2>
          <p>
            Desenvolvedora front-end júnior com uma paixão pelo mundo da tecnologia, com experiência em <span>React.js</span>, <span>Next.js</span>, <span>JavaScript</span>, <span>TypeScript</span>, <span>Styled-Components</span>, <span>TailwindCSS</span> e consumo de <span>APIs REST</span>. Desenvolvo interfaces bonitas, modernas, intuitivas e responsivas, que proporcionem uma ótima experiência ao usuário.
          </p>
      </AboutContent>
    </section>
  )
}