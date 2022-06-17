import Scoreboard from "../../organisms/Scoreboard";
import TopPanel from "../../molecules/TopPanel";
import { useState } from "react";

import { MockType } from "../../../mock/payload";
import Overview from "../../organisms/Overview";

const recoverState = () => {
  const state = localStorage.getItem("state");
  if (state) {
    return JSON.parse(state);
  } else {
    return {};
  }
};

export default function Dashboard() {
  const [state, setState] = useState(recoverState());
  console.log(Object.keys(state));
  // TODO update both state and localstorage on
  return Object.keys(state).length ? (
    <>
      <TopPanel totalFollowers={state.total_followers} />
      <Scoreboard media={state.media} period={state.period} />
      <Overview media={state.media} />
    </>
  ) : (
    <>
      <TopPanel totalFollowers={0} />
    </>
  );
}
