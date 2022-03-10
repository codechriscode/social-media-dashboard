import Box from "../../atoms/Box";
import Toggle from "../../atoms/Toggle";
import Typography from "../../atoms/Typography";

export default function TopPanel() {
  return (
    <Box boxClass="corner-row">
      <div>
        <Typography variant="title">Social Media Dashboard</Typography>
        <Typography variant="subtitle">{`Total Followers: ${23405}`}</Typography>
      </div>
      <Box boxClass="center-row">
        <Typography variant="subtitle">Dark Mode</Typography>
        <Toggle />
      </Box>
    </Box>
  );
}
