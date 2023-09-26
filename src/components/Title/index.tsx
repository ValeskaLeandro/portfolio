// Styles
import { TitleContainer } from "./styled";

// Interface
import { ITitle } from "../../utils/interfaces";

export default function Title({title, subtitle, classname}: ITitle) {
  return(
    <TitleContainer className={classname}>
      <div className="contentTitle">
        <span>{subtitle}</span>
        <h1>{title}</h1>
      </div>
    </TitleContainer>
  )
}