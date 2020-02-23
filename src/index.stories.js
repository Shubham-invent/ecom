import { refreshState, saveState } from "./store/localStorage";

import Card from "./components/CardItem";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import React from "react";
import Sidebar from "./components/Sidebar";
import UserDetails from "./components/UserDetails";
import configureStore from "./store/configureStore";

const persistedstate = refreshState();
const store = configureStore(persistedstate);

store.subscribe(() => {
  saveState(store.getState());
});

export default { title: "Common Components" };
export const NavbarComponent = () => (
  <Provider store={store}>
    <Navbar />
  </Provider>
);
export const SidebarComponent = () => (
  <Provider store={store}>
    <Sidebar />
  </Provider>
);
export const CardComponent = () => (
  <Provider store={store}>
    <Card />
  </Provider>
);
export const UserDetailsComponent = () => (
  <Provider store={store}>
    <UserDetails />
  </Provider>
);
