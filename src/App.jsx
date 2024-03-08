import { createGlobalStyle } from "styled-components"
import { AppRouter } from "./routes"
import { ThemeProvider } from "./contexts/theme-context"

function App() {

  return (
    <ThemeProvider>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
      }

    a{
      text-decoration: none;
      color: inherit;
    }

    li{
      list-style: none;
    }
`

export default App