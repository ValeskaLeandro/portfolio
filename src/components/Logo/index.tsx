// Styles
import { Logotype } from "./styled"

// Interfaces
import { ILogo } from "../../utils/interfaces"
export default function Logo({footer}: ILogo) {
  return(
    <Logotype className={footer ? 'footer' : ''}>
      <h1><span className="sinal">{"<"}</span>Valeska<span className="bar">{"/"}</span><span className="sinal">{">"}</span></h1>
    </Logotype>
  )
}

  