import { ThemeProvider } from "@emotion/react"
import MainRoute from "./routes/MainRoute"
import mainTheme from "./themes/mainTheme"

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <MainRoute/>      
    </ThemeProvider>
  )
}

export default App
