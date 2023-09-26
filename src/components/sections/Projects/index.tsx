// Styles
import { ProjectsSection } from "./styled";

// Components
import Title from "../../Title";
import Card from "../../Card";

// Interfaces
import { IProjects } from "../../../utils/interfaces";

// Utilities
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import { settings } from "../../../utils/settings";

export default function Projects({ projects }: IProjects) {
  return (
    <ProjectsSection id="projects" className="container">
      <Title title="Projetos" subtitle="<Portfólio/>" classname="end"/>
      <div className="projectsContainer">
      <Swiper {...settings}>
      {projects.length > 0 && projects.map((project) => (
        <SwiperSlide key={project.id}>
          <Card 
            id={project.id}
            name={project.name}
            description={project.description}
            code={project.code}
            deploy={project.deploy}
            tecnologys={project.tecnologys}
            img={project.img}
          />
        </SwiperSlide>
      ))}
      </Swiper>
      </div>
    </ProjectsSection>
  )
}
