import Card from "./components/Card";
import Navbar from "./components/Navbar";
import React from "react";
import Sidebar from "./components/Sidebar";
import UserDetails from "./components/UserDetails";

export default { title: "Common Components" };
export const NavbarComponent = () => <Navbar />;
export const SidebarComponent = () => <Sidebar />;
export const CardComponent = () => <Card />;
export const UserDetailsComponent = () => <UserDetails />;
