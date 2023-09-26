import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primaryColor: string,
      secundaryColor: string,  
      primaryBackground: string,
      secundaryBackground: string,
      title: string,
      text: string,
      black: string,
      white: string
    }
  }
}