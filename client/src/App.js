import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import "./reset.css";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        BASE
      </div>
    </ThemeProvider>
  );
}

export default App;