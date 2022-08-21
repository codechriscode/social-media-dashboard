import Box from "../../atoms/Box";
import Icon from "../../atoms/Icon";
import Typography from "../../atoms/Typography";

export default function GetStarted() {
  return (
    <Box boxClass="center-column">
      <Icon iconName="famous" />
      <Typography variant="title2">Click the menu to get started</Typography>
    </Box>
  );
}
