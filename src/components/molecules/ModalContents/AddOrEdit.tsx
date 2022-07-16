import React from "react";
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
  onSaveCallback?: () => void;
  onExitCallback?: () => void;
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

  onEnterCallback && onEnterCallback();

  function selectChangeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    onChangeCallback &&
      onChangeCallback(e.target.value as SocialNetworkNames);
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
          <Typography variant="subtitle">Add Mocked</Typography>
          <input type="checkbox" />
        </label>
        <label>
          <Typography variant="subtitle">Social Network</Typography>
          <select
            name="Social Network"
            style={{}}
            value={networkName.toLowerCase()}
            onChange={selectChangeHandler}
          >
            {Object.keys(socialNetworks).map((sn) => (
              <option value={sn}>{sn}</option>
            ))}
          </select>
        </label>
        <label>
          <Typography variant="subtitle">Username</Typography>
          <input id="username" type="text" />
        </label>
        <div style={{ marginBottom: "2vh", marginTop: "2vh" }}>
          <input
            type="submit"
            value="Authorize"
            onClick={(e) => {
              e.preventDefault();
              onSaveCallback && onSaveCallback();
            }}
          />
        </div>
      </form>
    </>
  );
}
