import Card, { CardProps } from "./Card";
import { MockType } from "../../../mock/payload";
import Typography from "../../atoms/Typography";
import Icon from "../../atoms/Icon";
import Indicator from "../../atoms/Indicator";
import Box from "../../atoms/Box";

import { roundNum } from "../../../helpers";

type MainCardProps = CardProps & Omit<MockType["media"][0], "other_status">;

export default function MainCard(props: MainCardProps) {
  const {
    name,
    username,
    status,
    draggable = false,
    onclick,
    ondragstart,
    ondragover,
    ondrop,
    id,
  } = props;

  return (
    <Card
      cardClass={`main ${name.toLowerCase()}`}
      draggable={draggable}
      onclick={onclick}
      ondragstart={ondragstart}
      ondragover={ondragover}
      ondrop={ondrop}
      id={id}
    >
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
    </Card>
  );
}
