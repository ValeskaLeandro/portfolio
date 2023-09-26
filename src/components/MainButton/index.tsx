// Styles
import { Link } from "./styled";

interface ButtonProps {
  text: string,
  icon?: React.ElementType
}

export default function MainButton({text, icon: Icon}: ButtonProps) {
  return(
    <Link href="">{text} {Icon ? (
    <span className="icon">
      <Icon />
    </span>
    ) : (
    <span></span>
    )}</Link>
  )
}