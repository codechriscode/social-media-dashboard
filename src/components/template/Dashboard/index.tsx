import { useCallback, useState } from "react";
import { mock, PayloadType, MediaType } from "../../../store/payload";
import {
  socialNetworks,
  SocialNetworkNames,
} from "../../../store/socialNetworks";

import Scoreboard from "../../organisms/Scoreboard";
import TopPanel from "../../molecules/TopPanel";
import Overview from "../../organisms/Overview";
import FloatingMenu, { FloatingMenuProps } from "../../organisms/FloatingMenu";
import Card from "../../atoms/Card";
import Overlay from "../../atoms/Overlay";

const emptyState: PayloadType = {
  period: 0,
  total_followers: 0,
  media: {},
};

const recoverState = () => {
  const state = localStorage.getItem("state");
  if (state) {
    return JSON.parse(state);
  } else {
    return { mock };
    // TODO return emptyState when "add first" feature is ready
  }
};

const generateNew = (networkName: SocialNetworkNames, username: string) => {
  const networkParams = socialNetworks[networkName];
  const cnxID = `${Math.trunc(Math.random() * 10000000000)}`;
  const newEntry = {
    [cnxID]: {
      socialNetwork: networkName,
      username: username,
      status: {
        value: Math.trunc(Math.random() * 1500000),
        unit: networkParams.metrics.main,
        change: Math.trunc(Math.random() * 150),
      },
      other_status: [
        {
          unit: networkParams.metrics.other[0],
          value: Math.trunc(Math.random() * 15000),
          change_pc: Math.trunc(Math.random() * 150),
        },
        {
          unit: networkParams.metrics.other[1],
          value: Math.trunc(Math.random() * 15000),
          change_pc: Math.trunc(Math.random() * 150),
        },
      ],
    },
  };
  return newEntry;
};

const menuButtons: FloatingMenuProps["buttons"] = [
  "Twitter",
  "Instagram",
  "Facebook",
  "YouTube",
  "delete",
];

export default function Dashboard() {
  const [data, setData] = useState<PayloadType>(recoverState());
  // TODO update both data and localstorage on

  const [overlay, setOverlay] = useState<boolean>(false);
  const setOverlayCallback = (active: boolean) => {
    setOverlay(active);
  };

  const addNew = (networkName: SocialNetworkNames, username: string) => {
    const newEntry = generateNew(networkName, username);
    const newTotal = data.total_followers + newEntry[0].status.value;
    setData(prevState => ({
      ...prevState,
      total_followers: newTotal,
      media: { ...prevState.media, ...newEntry },
    }));
  };

  const remove = (cnxID: string) => {
    let newData = Object.assign({}, data);
    let toDelete = (newData.media as MediaType)[cnxID];
    let newTotal = newData.total_followers - toDelete.status.value;
    newData = { ...newData, total_followers: newTotal };

    delete (newData.media as MediaType)[cnxID];
    setData(newData);
  };

  const removeAll = () => {
    setData(emptyState);
  };

  const callbacks = {
    addNew: addNew,
    // update: update,
    removeAll: removeAll,
    remove: remove,
    setOverlay: setOverlayCallback,
  };

  return (
    <>
      <TopPanel totalFollowers={data.total_followers || 0} />
      {data.media && Object.keys(data.media).length ? (
        <>
          <Scoreboard media={data.media} period={data.period} />
          <Overview media={data.media} period={data.period} />
        </>
      ) : (
        <Card cardClass="main">Add new</Card>
      )}
      <FloatingMenu buttons={menuButtons} callbacks={callbacks} />
      <Overlay
        style={
          overlay
            ? { visibility: "visible", opacity: 1 }
            : { visibility: "hidden", opacity: 0 }
        }
      />
    </>
  );
}
