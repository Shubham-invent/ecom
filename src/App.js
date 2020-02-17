import "./App.css";

import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import Routes from "./routes";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/materialTheme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes />
        <Checkbox />
      </ThemeProvider>
    </div>
  );
}

export default App;
