// Interfaces
import { ISkills } from "../../../utils/interfaces";
import SkillIcon from "../../SkillIcon";
import Title from "../../Title";
import { Icon, SkillsContainer } from "./styled";

export default function Skills({skills} : ISkills) {
  return(
    <section id="skills">
      <Title title="Tecnologias" subtitle="<HardSkills/>" classname="start"/>

      <SkillsContainer>
        {skills.length > 0 && skills.map((Skill, index) => <Icon key={index}><SkillIcon skill={Skill}/></Icon>)}
      </SkillsContainer>
    </section>
  )
}