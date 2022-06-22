import "../styles.css";

import { MockType } from "../../../mock/payload";
import { calcPeriod } from "../../../helpers";
import MiniCard from "../../molecules/Cards/MiniCard";
import Typography from "../../atoms/Typography";

type OverviewProps = { media: MockType["media"] };

export default function Overview(props: OverviewProps) {
  const { media } = props;

  return (
    <>
      <div style={{ width: "100%" }}>
        <Typography variant="title2">{`Overview - ${calcPeriod(0)}`}</Typography>
      </div>
      <div className="grid-container">
        {Object.keys(media).map((mediumName) => {
          const medium = media[mediumName];
          return medium.other_status.map((stat) => {
            return (
              <MiniCard
                name={medium.name}
                other_status={stat}
                key={medium.name + stat.unit}
              />
            );
          });
        })}
      </div>
    </>
  );
}
