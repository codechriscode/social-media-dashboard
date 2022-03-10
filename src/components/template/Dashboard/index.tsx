import Toggle from "../../atoms/Toggle";
import Typography from "../../atoms/Typography";
import Scoreboard from "../../organisms/Scoreboard";
import TopPanel from "../../molecules/TopPanel";

export default function Dashboard() {

  return (
    <>
      <TopPanel />
      <Scoreboard />
      <Typography variant="title2">Overview - Today</Typography>
      <Toggle />
    </>
  );
}
