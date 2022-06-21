import Scoreboard from "../../organisms/Scoreboard";
import TopPanel from "../../molecules/TopPanel";
import { useState } from "react";

import mock from "../../../mock/payload";
import Overview from "../../organisms/Overview";
import FloatingMenu, { FloatingMenuProps } from "../../organisms/FloatingMenu";
import Card from "../../atoms/Card";
import Overlay from "../../atoms/Overlay";

const recoverState = () => {
  const state = localStorage.getItem("state");
  if (state) {
    return JSON.parse(state);
  } else {
    return mock;
    // TODO return empty when "add new" feature is ready
  }
};

const arrButtons: FloatingMenuProps["buttons"] = [
  {
    name: "Twitter",
    callback: () => {
      console.log("Clicked me!");
    },
  },
  {
    name: "Instagram",
    callback: () => {
      console.log("Insta");
    },
  },
  {
    name: "Facebook",
    callback: () => {
      console.log("Insta");
    },
  },
  {
    name: "YouTube",
    callback: () => {
      console.log("Insta");
    },
  },
];

export default function Dashboard() {
  const [data, setData] = useState(recoverState());
  // TODO update both data and localstorage on

  const [overlayed, setOverlayed] = useState(false);
  function activateOverlay() {
    setOverlayed(true);
  }
  function disableOverlay() {
    setOverlayed(false);
  }

  return (
    <>
      <TopPanel totalFollowers={data.total_followers || 0} />
      {Object.keys(data).length ? (
        <>
          <Scoreboard media={data.media} period={data.period} />
          <Overview media={data.media} />
        </>
      ) : (
        <Card cardClass="main" />
      )}
      <FloatingMenu
        buttons={arrButtons}
        onEnterCallback={activateOverlay}
        onExitCallback={disableOverlay}
      />
      {
        
      }
      <Overlay
        style={
          overlayed
            ? { visibility: "visible", opacity: 1 }
            : { visibility: "hidden", opacity: 0 }
        }
      />
    </>
  );
}
