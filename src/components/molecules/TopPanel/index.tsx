import Box from "../../atoms/Box";
import Toggle from "../../atoms/Toggle";
import Typography from "../../atoms/Typography";

import "./styles.css";
import { commaSeparate } from "../../../helpers";

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

export default function TopPanel(props: { totalFollowers: number }) {
  const checked = getDarkMode() === "true" || false;
  const { totalFollowers } = props;

  return (
    <>
      <Box id="topPanel" boxClass="corner-row">
        <div style={{width: "100%"}}>
          <Typography variant="title">Social Media Dashboard</Typography>
          <Typography variant="subtitle">{`Total Followers: ${commaSeparate(
            totalFollowers
          )}`}</Typography>
        </div>
        <span className="divider" />
        <Box id="darkModePanel" boxClass="corner-row">
          <Typography variant="subtitle">Dark Mode</Typography>
          <Toggle checked={checked} onchange={toggleDarkMode} />
        </Box>
      </Box>
    </>
  );
}
