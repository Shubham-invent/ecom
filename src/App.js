import "./App.css";

import Checkbox from "@material-ui/core/Checkbox";
import { Provider } from "react-redux";
import React from "react";
import Routes from "./routes";
import { ThemeProvider } from "@material-ui/core/styles";
import configureStore from "./store/configureStore";
import theme from "./theme/materialTheme";

const store = configureStore({});
function App() {
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
