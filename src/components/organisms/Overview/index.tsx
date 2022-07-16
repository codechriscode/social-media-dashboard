import "../styles.css";

import { PayloadType, MediaType } from "../../../store/payload";
import { calcPeriod } from "../../../helpers";
import MiniCard from "../../molecules/Cards/MiniCard";
import Typography from "../../atoms/Typography";

type OverviewProps = {
  media: MediaType;
  period: PayloadType["period"];
};

export default function Overview(props: OverviewProps) {
  const { media, period } = props;

  return (
    <>
      <div style={{ width: "100%" }}>
        <Typography variant="title2">{`Overview - ${calcPeriod(
          period
        )}`}</Typography>
      </div>
      <div className="grid-container">
        {Object.keys(media).map((cnxID) => {
          const medium = media[cnxID];
          return medium.other_status.map((stat) => {
            return (
              <MiniCard
                socialNetwork={medium.socialNetwork}
                username={medium.username}
                other_status={stat}
                key={medium.socialNetwork + medium.username + stat.unit}
              />
            );
          });
        })}
      </div>
    </>
  );
}
