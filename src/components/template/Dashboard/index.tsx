import { useContext } from "react";

import Scoreboard from "../../organisms/Scoreboard";
import TopPanel from "../../molecules/TopPanel";
import Overview from "../../organisms/Overview";
import FloatingMenu from "../../organisms/FloatingMenu";
import Overlay from "../../atoms/Overlay";
import AppContext from "../../../store/AppContext";
import GetStarted from "../../molecules/GetStarted";

export default function Dashboard() {
  const ctx = useContext(AppContext);

  const menuButtons = [...Object.keys(ctx.socialNetworks), "delete"];

  return (
    <>
      <TopPanel totalFollowers={ctx.profiles.state.total_followers || 0} />
      <main>
        {ctx.profiles.state.media &&
        Object.keys(ctx.profiles.state.media).length ? (
          <>
            <Scoreboard
              media={ctx.profiles.state.media}
              period={ctx.profiles.state.period}
            />
            <Overview
              media={ctx.profiles.state.media}
              period={ctx.profiles.state.period}
              order={ctx.profiles.positions}
            />
          </>
        ) : (
          <GetStarted />
        )}
      </main>
      <FloatingMenu buttons={menuButtons} />
      <Overlay
        style={
          ctx.overlay.state
            ? { visibility: "visible", opacity: 1 }
            : { visibility: "hidden", opacity: 0 }
        }
      />
    </>
  );
}
