import Typography from "../../atoms/Typography";
import mock from "../../../mock/payload";

import "../styles.css";

import { calcPeriod } from "../../../helpers";
import MiniCard from "../../molecules/Cards/MiniCard";

export default function Overview() {
  return (
    <>
      <div style={{ width: "100%" }}>
        <Typography variant="title2">{`Overview - ${calcPeriod(
          0
        )}`}</Typography>
      </div>
      <div className="grid-container">
        {Object.keys(mock.media).map((mediumName) => {
          const medium = mock.media[mediumName];
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
