import Typography from "../../atoms/Typography";
import mock from "../../../mock/payload";

import "../styles.css";

import { calcPeriod } from "../../../helpers";
import MiniCard from "../../molecules/Cards/MiniCard";
import SectionTitle from "../../molecules/SectionTitle";

export default function Overview() {
  return (
    <>
      <SectionTitle content={`Overview - ${calcPeriod(0)}`} />
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
