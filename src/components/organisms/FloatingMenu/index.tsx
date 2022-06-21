import { useState } from "react";
import FloatingButton, {
  FloatingButtonProps,
} from "../../molecules/FloatingButton";
import Overlay from "../../atoms/Overlay";
import "./styles.css";

const calculatePosition = (i: number) => (i + 1) * 70 + 40;

export type FloatingMenuProps = { buttons: Array<FloatingButtonProps>, activateCallback?: () => {} };

export default function FloatingMenu(props: FloatingMenuProps) {
  const { buttons } = props;
  const [open, setOpen] = useState(false);

  function openMenu() {
    if (open) {
      setOpen(false);
    } else {
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
            callback={button.callback}
            style={
              open
                ? { bottom: `${calculatePosition(index)}px` }
                : { boxShadow: `0 0 0` }
            }
          />
        ))}
        <FloatingButton name="threeDots" callback={openMenu} />
      </div>
      {open ? <Overlay /> : null}
    </>
  );
}
