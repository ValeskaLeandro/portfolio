// Styles
import { AlertContainer } from "./styled";

// Interfaces
import { IAlert } from "../../utils/interfaces";

export default function Alert({text, classname} : IAlert) {
  return(
    <AlertContainer className={classname}>
      <p>{text}</p>
    </AlertContainer>
  )
}