import Typography from "../../atoms/Typography";
import Icon, { IconNames } from "../../atoms/Icon";
import Indicator from "../../atoms/Indicator";
import Box from "../../atoms/Box";
import Card, { CardProps } from "../../atoms/Card";
import { MediumInfoType, OtherStatusType } from "../../../mock/payload";

import "./styles.css";
import { roundNum } from "../../../helpers";

type MiniCardProps = CardProps &
  Omit<MediumInfoType, "username"> & { other_status: OtherStatusType };

export default function MiniCard(props: MiniCardProps) {
  const { name, other_status } = props;

  return (
    <Card cardClass="mini">
      <Box boxClass="corner-row">
        <Typography variant="subtitle">{other_status.unit}</Typography>
        <Icon iconName={name as IconNames} />
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
