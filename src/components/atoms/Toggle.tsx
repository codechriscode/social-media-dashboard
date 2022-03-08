import "./Toggle.css";

export default function Toggle(props: {checked?: boolean}) {
  const { checked } = props;
  return (
    <label className="switch">
      <input type="checkbox" checked={checked} />
      <span className="slider"></span>
    </label>
  );
}
