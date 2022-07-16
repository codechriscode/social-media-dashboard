import { Dispatch, SetStateAction, useState } from "react";
import {
  SocialNetworkNames,
  socialNetworks,
} from "../../../store/socialNetworks";
import { IconNames } from "../../atoms/Icon";
import FloatingButton from "../../molecules/FloatingButton";
import Modal from "../../molecules/Modal";
import AddOrEdit from "../../molecules/ModalContents/AddOrEdit";
import "./styles.css";

const calculatePosition = (i: number) => (i + 1) * 70 + 40;

export type FloatingMenuProps = {
  buttons: Array<IconNames>;
  callbacks?: {
    [key: string | "setOverlay"]: (...args: any) => any;
  };
};

export default function FloatingMenu(props: FloatingMenuProps) {
  const { buttons, callbacks } = props;
  const [open, setOpen] = useState(false);
  const [chosenNetwork, setChosenNetwork] = useState<SocialNetworkNames | null>(
    null
  );

  function toggleMenu() {
    if (open) {
      callbacks && !chosenNetwork && callbacks.setOverlay(false);
      setOpen(false);
    } else if (!open) {
      callbacks && callbacks.setOverlay(true);
      setOpen(true);
    }
  }

  return (
    <>
      <div className="floating-menu">
        {buttons.map((iconName, index) => (
          <FloatingButton
            key={`${index}${iconName}`}
            name={iconName}
            callback={() => {
              if (iconName in Object.keys(socialNetworks)) {
                setChosenNetwork(iconName as SocialNetworkNames);
              }
              toggleMenu();
              callbacks && callbacks.setOverlay(true);
            }}
            style={
              open
                ? { bottom: `${calculatePosition(index)}px` }
                : { boxShadow: `0 0 0` }
            }
          />
        ))}
        <FloatingButton name="threeDots" callback={toggleMenu} />
      </div>
      {chosenNetwork && (
        <Modal>
          <AddOrEdit
            networkName={chosenNetwork}
            onChangeCallback={(sn: SocialNetworkNames) => {
              setChosenNetwork(sn);
            }}
            onSaveCallback={callbacks && callbacks.addNew}
            onExitCallback={() => {
              setChosenNetwork(null);
              callbacks && callbacks.setOverlay(false);
            }}
          />
        </Modal>
      )}
    </>
  );
}
