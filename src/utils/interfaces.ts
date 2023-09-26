export interface IButtonChangeTheme {
  toggleTheme(): void,
  checked: boolean
}

export interface IMainButton {
  text: string,
  icon?: React.ElementType,
  link: string
}