import Toggle from "../../atoms/Toggle";
import Typography from "../../atoms/Typography";
import Scoreboard from "../../organisms/Scoreboard";
import TopPanel from "../../molecules/TopPanel";
import MiniCard from "../../molecules/Cards/MiniCard";

export default function Dashboard() {

  return (
    <>
      <TopPanel />
      <Scoreboard />
      {/* <MiniCard 
        name="youtube"
        other_status={{unit: "Total Views", value: 500, change_pc: 25}}
        username="Nathan"
      /> */}
      <Typography variant="title2">Overview - Today</Typography>
    </>
  );
}
