import "./App.css";
import AppFooter from "./components/molecules/AppFooter";
import Dashboard from "./components/template/Dashboard";

const recoverDarkMode = () => {
  if (localStorage.getItem("darkMode") === "true")
    document.documentElement.setAttribute("darkMode", "true");
};

export default function App() {
  recoverDarkMode();
  return (
    <div className="app-background">
      <div className="App">
        <Dashboard />
        <AppFooter />
      </div>
    </div>
  );
}
