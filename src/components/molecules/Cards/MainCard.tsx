import Card, { CardProps } from "../../atoms/Card";
import { MediaType } from "../../../store/payload";
import { SocialNetworkNames } from "../../../store/socialNetworks";
import Typography from "../../atoms/Typography";
import Icon from "../../atoms/Icon";
import Indicator from "../../atoms/Indicator";
import Box from "../../atoms/Box";

import { roundNum } from "../../../helpers";

type MainCardProps = CardProps & Omit<MediaType[0], "other_status">;

export default function MainCard(props: MainCardProps) {
  const {
    socialNetwork,
    period,
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
      cardClass={`main ${socialNetwork.toLowerCase()}`}
      draggable={draggable}
      onclick={onclick}
      ondragstart={ondragstart}
      ondragover={ondragover}
      ondrop={ondrop}
      id={id}
      period={period}
    >
      <Box boxClass="center-row">
        <Icon iconName={socialNetwork as SocialNetworkNames} />
        <Typography variant="profile-name">{username}</Typography>
      </Box>
      <Box boxClass="center-column">
        <Typography variant="spotlight-num">
          {roundNum(status.value)}
        </Typography>
        <Typography variant="spaced-caps">{status.unit}</Typography>
      </Box>
      <Indicator value={status.change} period={period} arrow />
    </Card>
  );
}
