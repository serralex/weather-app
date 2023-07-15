import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./features/Home/Home";
import { GlobalContextProvider } from "./context/global/global-context";

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
      secondary: {
        main: "#fff",
      },
    },
    typography: {
      fontFamily: "Roobert",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalContextProvider>
        <Home />
      </GlobalContextProvider>
    </ThemeProvider>
  );
};

export default App;
