import "./App.css";
import { StyledEngineProvider } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./features/Home/Home";
import { GlobalContextProvider } from "./context/global/global-context";

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>
        <GlobalContextProvider>
          <Home />
        </GlobalContextProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
