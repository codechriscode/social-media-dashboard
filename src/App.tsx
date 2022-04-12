import "./App.css";
import Dashboard from "./components/template/Dashboard";

const recoverDarkMode = () => {
  if (localStorage.getItem("darkMode") === "true")
    document.documentElement.setAttribute("darkMode", "true");
};

export default function App() {
  recoverDarkMode();
  return (
    <div className="App">
        <Dashboard />
    </div>
  );
}
