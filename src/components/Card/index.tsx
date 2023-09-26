// Styles
import { CardProject } from "./styled";

// Interfaces
import { ICard } from "../../utils/interfaces";

// Utilities
import { BsCodeSlash } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";


export default function Card({name, description, code, deploy, tecnologys, img }: ICard) {
  return(    
    <CardProject>
      <div className="image">
          <img src={img} alt={name} />
      </div>
      <div className="info">
        <div className="top">        
          <h2>{name}</h2>
          <div className="links">
            <a href={code} target="_blank"><BsCodeSlash /></a>
            <a href={deploy} target="_blank"><BiLinkExternal /></a>
          </div>
        </div>
        <p>{description}</p>
      </div>      
      <div className="tech">
        {tecnologys.length > 0 && tecnologys.map((Tecnology, index) => <Tecnology key={index}/>)}
      </div>
    </CardProject>
  )
}