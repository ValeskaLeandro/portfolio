// Styles
import { ButtonChangeTheme } from "./styled";

// Interfaces
import { IButtonChangeTheme } from "../../utils/interfaces";

export default function ButtonTheme({ toggleTheme, checked }: IButtonChangeTheme) {
  return(
    <ButtonChangeTheme>
      <label className="switch">
        <input type="checkbox" onClick={toggleTheme} checked={checked} readOnly/>
        <span></span>
      </label>
    </ButtonChangeTheme>
  )
}