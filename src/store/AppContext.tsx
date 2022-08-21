import { createContext, useState, useEffect } from "react";
import { generateMockProfile } from "../helpers";
import { MediaType, mock, PayloadType } from "./payload";
import { SocialNetworkNames, socialNetworks } from "./socialNetworks";

const recoverPayloadFromLocalStorage = () => {
  const localMock = localStorage.getItem("payload");
  if (localMock) {
    return JSON.parse(localMock);
  } else {
    return { ...mock };
  }
};

const recoverPositionsFromLocalStorage = (media: MediaType) => {
  let lsPos = localStorage.getItem("mainCardPositions");
  if (lsPos) return JSON.parse(lsPos) as Array<string>;
  return Object.keys(media);
};

const emptyPayload: PayloadType = {
  period: 0,
  total_followers: 0,
  media: {},
};

type contextType = {
  socialNetworks: typeof socialNetworks;
  overlay: {
    state: number;
    addCall: () => void;
    removeCall: () => void;
  };
  profiles: {
    state: PayloadType;
    add: (networkName: SocialNetworkNames, username: string) => void;
    remove: (cnxID: string) => void;
    removeAll: () => void;
    positions: Array<string>;
    setPositions: (positions: Array<string>) => void;
  };
};

// TODO check if initial value is at all needed with TS
const AppContext = createContext<contextType>({
  socialNetworks: socialNetworks,
  overlay: {
    state: 0,
    addCall: () => {},
    removeCall: () => {},
  },
  profiles: {
    state: emptyPayload,
    add: (networkName: SocialNetworkNames, username: string) => {},
    remove: (cnxID: string) => {},
    removeAll: () => {},
    positions: [],
    setPositions: (positions: Array<string>) => {},
  },
});

export function AppContextProvider(props: any) {
  //Profiles
  const [data, setData] = useState<PayloadType>(() =>
    recoverPayloadFromLocalStorage()
  );
  //Overlay
  const [overlay, setOverlay] = useState<number>(0);
  //Profile display order
  const [positions, setPositions] = useState<string[]>(
    recoverPositionsFromLocalStorage(data.media)
  );

  function addOverlayCallHandler() {
    setOverlay((prevOverlayValue) => prevOverlayValue + 1);
  }

  function removeOverlayCallHandler() {
    setOverlay((prevOverlayValue) => prevOverlayValue - 1);
  }

  const addProfileHandler = (
    networkName: SocialNetworkNames,
    username: string
  ) => {
    const newEntry = generateMockProfile(networkName, username);
    const newCnxID = Object.keys(newEntry)[0];
    const newTotal = data.total_followers + newEntry[newCnxID].status.value;
    setData((prevState) => ({
      ...prevState,
      total_followers: newTotal,
      media: { ...prevState.media, ...newEntry },
    }));
    setPositions((prevPositions) => [newCnxID, ...prevPositions]);
  };

  const removeProfileHandler = (cnxID: string) => {
    let newData = Object.assign({}, data);
    let toDelete = (newData.media as MediaType)[cnxID];
    let newTotal = newData.total_followers - toDelete.status.value;
    newData = { ...newData, total_followers: newTotal };

    setPositions((prevPositions) => prevPositions.filter((p) => p !== cnxID));

    delete (newData.media as MediaType)[cnxID];
    setData(newData);
  };

  const removeAllProfilesHandler = () => {
    setData(emptyPayload);
    setPositions([]); //marks visitor cleared mock
  };

  const setPositionsHandler = (positions: Array<string>) => {
    setPositions(positions);
  };

  //Persist positions to localStorage on change
  useEffect(() => {
    localStorage.setItem("mainCardPositions", JSON.stringify(positions));
  }, [positions]);

  useEffect(() => {
    localStorage.setItem("payload", JSON.stringify(data));
  }, [data]);

  const context = {
    socialNetworks: socialNetworks,
    overlay: {
      state: overlay,
      addCall: addOverlayCallHandler,
      removeCall: removeOverlayCallHandler,
    },
    profiles: {
      state: { ...data },
      add: addProfileHandler,
      remove: removeProfileHandler,
      removeAll: removeAllProfilesHandler,
      positions: positions,
      setPositions: setPositionsHandler,
    },
  };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
}

export default AppContext;
