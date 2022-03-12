import React from "react";
import "./App.css";
import Box from "./components/atoms/Box";
import Dashboard from "./components/template/Dashboard";

const recoverDarkMode = () => {
  if (localStorage.getItem("darkMode") === "true")
    document.documentElement.setAttribute("darkMode", "true");
};

export default function App() {
  recoverDarkMode();
  return (
    <div className="App">
      <Box boxClass="center-column">
        <Dashboard />
      </Box>
    </div>
  );
}
