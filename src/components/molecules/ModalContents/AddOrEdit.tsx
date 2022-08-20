import React, { useState } from "react";
import {
  socialNetworks,
  SocialNetworkNames,
} from "../../../store/socialNetworks";
import Box from "../../atoms/Box";
import Icon from "../../atoms/Icon";
import Typography from "../../atoms/Typography";

type AddOrEditProps = {
  networkName: SocialNetworkNames;
  onEnterCallback?: () => void;
  onSaveCallback?: (...args: any) => void;
  onExitCallback?: (...args: any) => void;
  onChangeCallback?: (sn: SocialNetworkNames) => void;
};

export default function AddOrEdit(props: AddOrEditProps) {
  const {
    networkName,
    onSaveCallback,
    onEnterCallback,
    onExitCallback,
    onChangeCallback,
  } = props;
  const [username, setUsername] = useState<string>();

  onEnterCallback && onEnterCallback();

  function selectChangeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    onChangeCallback &&
      onChangeCallback(e.target.value as SocialNetworkNames);
  }

  function usernameChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  return (
    <>
      <Box boxClass="corner-row">
        <Typography variant="title2" style={{ marginTop: "2vh" }}>
          Add New
        </Typography>
        <Icon iconName={networkName} />
      </Box>
      <form>
        <label>
          <Typography variant="subtitle">Social Network</Typography>
          <select
            name="Social Network"
            value={networkName}
            onChange={selectChangeHandler}
          >
            {Object.keys(socialNetworks).map((sn) => (
              <option value={sn} key={sn}>{sn}</option>
            ))}
          </select>
        </label>
        <label>
          <Typography variant="subtitle">Username</Typography>
          <input id="username" type="text" value={username} onChange={usernameChangeHandler} />
        </label>
        <div className="form-options">
          <input
            type="submit"
            value="Authorize"
            onClick={(e) => {
              e.preventDefault();
              onSaveCallback && onSaveCallback(networkName, username);
              onExitCallback && onExitCallback();
            }}
          />
          <button
            className="cancel"
            onClick={(e) => {
              e.preventDefault();
              
              onExitCallback && onExitCallback()
            }}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
