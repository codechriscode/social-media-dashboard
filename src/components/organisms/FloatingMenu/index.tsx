import { useState, useContext } from "react";
import AppContext from "../../../store/AppContext";
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
};

export default function FloatingMenu(props: FloatingMenuProps) {
  const ctx = useContext(AppContext);

  const { buttons } = props;
  const [open, setOpen] = useState(false);
  const [chosenNetwork, setChosenNetwork] = useState<SocialNetworkNames | null>(
    null
  );

  function toggleMenu() {
    if (open) {
      ctx.overlay.removeCall();
      setOpen(false);
    } else if (!open) {
      ctx.overlay.addCall();
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
              if (Object.keys(socialNetworks).includes(iconName as string)) {
                setChosenNetwork(iconName as SocialNetworkNames);
                ctx.overlay.addCall();
              } else if (iconName === "delete") {
                ctx.profiles.removeAll();
              }
              toggleMenu();
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
            onSaveCallback={ctx.profiles.add}
            onExitCallback={() => {
              setChosenNetwork(null);
              ctx.overlay.removeCall();
            }}
          />
        </Modal>
      )}
    </>
  );
}
