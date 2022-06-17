import Icon, { IconNames } from "../../atoms/Icon";
import "./styles.css";

export type FloatingButtonProps = {
  name: IconNames;
  callback: () => void;
  style?: React.CSSProperties;
};

export default function FloatingButton(props: FloatingButtonProps) {
  const { name, callback, style } = props;

  function clickHandler() {
    callback();
  }

  return (
    <button className="floating-button" onClick={clickHandler} style={style}>
      <Icon iconName={name} />
    </button>
  );
}
