// Theme & Styles
import { ThemeProvider } from "styled-components"
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import GlobalStyle from "./styles/global"

// Hooks
import usePersistedState from "./hooks/usePersistedState";

// Components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  const [theme, setTheme, checked, setChecked] = usePersistedState("theme", dark, false);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
    setChecked(checked === false ? true : false);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} checked={checked}/>
      <Main />
      <ScrollToTop />
      <Footer />
    </ThemeProvider>
  )
}

export default App
