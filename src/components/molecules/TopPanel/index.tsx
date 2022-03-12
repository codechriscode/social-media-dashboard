import Box from "../../atoms/Box";
import Toggle from "../../atoms/Toggle";
import Typography from "../../atoms/Typography";

import "./styles.css";

const getDarkMode = () => {
  return localStorage.getItem("darkMode");
};

const toggleDarkMode = () => {
  const check = getDarkMode();
  const newState = check === "true" ? "false" : "true";
  if (newState === "true") {
    document.documentElement.setAttribute("darkMode", newState);
    localStorage.setItem("darkMode", newState);
  } else {
    localStorage.removeItem("darkMode");
    document.documentElement.removeAttribute("darkMode");
  }
};

export default function TopPanel() {
  const checked = getDarkMode() === "true" || false;

  return (
    <>
      <Box id="topPanel" boxClass="corner-row" >
        <div>
          <Typography variant="title">Social Media Dashboard</Typography>
          <Typography variant="subtitle">{`Total Followers: ${23405}`}</Typography>
        </div>
        <span className="divider" />
        <Box id="darkModePanel" boxClass="corner-row" >
          <Typography variant="subtitle">Dark Mode</Typography>
          <Toggle checked={checked} onchange={toggleDarkMode} />
        </Box>
      </Box>
    </>
  );
}
