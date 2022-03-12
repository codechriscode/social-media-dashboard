import Scoreboard from "../../organisms/Scoreboard";
import TopPanel from "../../molecules/TopPanel";

import mock from "../../../mock/payload";
import Overview from "../../organisms/Overview";

export default function Dashboard() {
  return (
    <>
      <TopPanel totalFollowers={mock.total_followers} />
      <Scoreboard />
      <Overview />
    </>
  );
}
