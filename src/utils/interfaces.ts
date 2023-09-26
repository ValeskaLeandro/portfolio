import { IconType } from "react-icons"

export interface IButtonChangeTheme {
  toggleTheme(): void,
  checked: boolean
}

export interface IMainButton {
  text: string,
  icon?: React.ElementType,
  link: string
}

export interface ICard {
  id: number,
  name: string,
  description: string,
  code: string,
  deploy: string,
  tecnologys: IconType[],
  img: string
}

export interface IProjects {
  projects: ICard[]
}