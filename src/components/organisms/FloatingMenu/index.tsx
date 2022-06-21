import { useState } from "react";
import FloatingButton, {
  FloatingButtonProps,
} from "../../molecules/FloatingButton";
import "./styles.css";

const calculatePosition = (i: number) => (i + 1) * 70 + 40;

export type FloatingMenuProps = {
  buttons: Array<FloatingButtonProps>;
  onEnterCallback?: () => void;
  onExitCallback?: () => void;
};

export default function FloatingMenu(props: FloatingMenuProps) {
  const { buttons, onEnterCallback, onExitCallback } = props;
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    if (open) {
      if (onExitCallback) {
        onExitCallback();
      }
      setOpen(false);
    } else if (!open) {
      if (onEnterCallback) {
        onEnterCallback();
      }
      setOpen(true);
    }
  }

  return (
    <>
      <div className="floating-menu">
        {buttons.map((button, index) => (
          <FloatingButton
            key={`${index}${button.name}`}
            name={button.name}
            callback={() => {
              toggleMenu();
              button.callback();
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
    </>
  );
}
