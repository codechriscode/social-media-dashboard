import Typography from "../../atoms/Typography";
import Scoreboard from "../../organisms/Scoreboard";
import TopPanel from "../../molecules/TopPanel";
import MiniCard from "../../molecules/Cards/MiniCard";

export default function Dashboard() {
  return (
    <>
      <TopPanel />
      <Scoreboard />
      <Typography variant="title2">Overview - Today</Typography>
      <MiniCard
        name="YouTube"
        other_status={{ unit: "Total Viewers", value: 250, change_pc: 30 }}
      />
    </>
  );
}
