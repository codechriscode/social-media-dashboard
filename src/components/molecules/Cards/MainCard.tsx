import Typography from "../../atoms/Typography";
import Icon from "../../atoms/Icon";
import Indicator from "../../atoms/Indicator";
import Box from "../../atoms/Box";

import "./styles.css";

import { roundNum } from "../../../helpers";

type MainCardProps = {
  name: string;
  username: string;
  status: {
    value: number;
    unit: string;
    change: number;
  };
};

export default function MainCard(props: MainCardProps) {
  const { name, username, status } = props;

  return (
    <span className={`card main-card ${name}`}>
      <Box boxClass="center-row">
        <Icon iconName={name} />
        <Typography variant="profile-name">{username}</Typography>
      </Box>
      <Box boxClass="center-column">
        <Typography variant="spotlight-num">
          {roundNum(status.value)}
        </Typography>
        <Typography variant="spaced-caps">{status.unit}</Typography>
      </Box>
      <Indicator value={status.change} period arrow />
    </span>
  );
}
