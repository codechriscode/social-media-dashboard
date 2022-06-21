import "./styles.css";

type OverlayProps = { style?: React.CSSProperties };

export default function Overlay(props: OverlayProps) {
  const { style } = props;
  return <div style={style} className="overlay"></div>;
}
