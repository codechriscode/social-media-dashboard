import Typography from "../../atoms/Typography";
import Icon from "../../atoms/Icon";
import { SocialNetworkNames } from "../../../store/socialNetworks";
import Indicator from "../../atoms/Indicator";
import Box from "../../atoms/Box";
import Card, { CardProps } from "../../atoms/Card";
import { MediumInfoType, OtherStatusType } from "../../../store/payload";

import "./styles.css";
import { roundNum } from "../../../helpers";

type MiniCardProps = CardProps &
  MediumInfoType & { other_status: OtherStatusType };

export default function MiniCard(props: MiniCardProps) {
  const { socialNetwork, username, other_status } = props;

  return (
    <Card cardClass="mini">
      <Box boxClass="corner-row">
        <div>
          <Typography variant="subtitle">{other_status.unit}</Typography>
          <Typography variant="profile-name" style={{ opacity: 0.3 }}>
            {username}
          </Typography>
        </div>
        <Icon iconName={socialNetwork as SocialNetworkNames} />
      </Box>
      <Box boxClass="corner-row" style={{ alignItems: "baseline" }}>
        <Typography variant="spotlight-num2">
          {roundNum(other_status.value)}
        </Typography>
        <Indicator value={other_status.change_pc} arrow percent />
      </Box>
    </Card>
  );
}
