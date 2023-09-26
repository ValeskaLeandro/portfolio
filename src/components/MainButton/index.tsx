// Styles
import { Link } from "./styled";

// Interfaces
import { IMainButton } from "../../utils/interfaces";

export default function MainButton({text, icon: Icon, link}: IMainButton) {
  return(
    <Link href={link}>{text} {Icon ? (
    <span className="icon">
      <Icon />
    </span>
    ) : (
    <span></span>
    )}</Link>
  )
}