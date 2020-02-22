import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import { refreshState, saveState } from "./store/localStorage";

import Checkbox from "@material-ui/core/Checkbox";
import { Provider } from "react-redux";
import React from "react";
import Routes from "./routes";
import { ThemeProvider } from "@material-ui/core/styles";
import configureStore from "./store/configureStore";
import theme from "./theme/materialTheme";

const persistedstate = refreshState();
const store = configureStore(persistedstate);

store.subscribe(() => {
  saveState(store.getState());
});

// const store = configureStore({});
function App() {
  return (
    <div>
      <ToastContainer />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
