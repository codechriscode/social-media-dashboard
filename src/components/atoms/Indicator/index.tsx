import Typography from "../Typography";
import Icon from "../Icon";

import { getIconName, calcPeriod, getColor } from "../../../helpers";

export default function Indicator(props: {
  value: number;
  arrow?: boolean;
  period?: boolean;
  percent?: boolean;
}) {
  const { value, arrow, period = false, percent = false } = props;
  return (
    <div className="center-row">
      {value && arrow ? <Icon iconName={getIconName(value)} /> : ""}
      <Typography variant="subtitle" style={{ color: `var(${getColor(value)})` }}>
        {`${Math.abs(value)}${percent ? "%" : ""} ${
          period ? calcPeriod(0) : ""
        }`}
      </Typography>
    </div>
  );
}
