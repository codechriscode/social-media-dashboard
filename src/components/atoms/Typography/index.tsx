import "./styles.css";

type Variant =
  | "title"
  | "title2"
  | "subtitle"
  | "profile-name"
  | "spotlight-num"
  | "spotlight-num2"
  | "spaced-caps"
  | "change-text";

type TypographyProps = {
  variant: Variant;
  children: string | number;
  style?: React.CSSProperties;
};

export default function Typography(props: TypographyProps) {
  const { variant, children, style } = props;
  return (
    <p className={variant} style={style || {}}>
      {children}
    </p>
  );
}
