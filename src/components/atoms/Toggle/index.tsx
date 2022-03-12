import { ChangeEventHandler } from "react";
import "./styles.css";

export default function Toggle(props: {
  checked?: boolean;
  onchange: ChangeEventHandler;
}) {
  const { checked, onchange } = props;
  return (
    <label className="switch">
      <input type="checkbox" defaultChecked={checked} onChange={onchange} />
      <span className="slider"></span>
    </label>
  );
}
