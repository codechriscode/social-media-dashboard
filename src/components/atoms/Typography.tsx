import "./Typography.css";

type Variant =
  | "title"
  | "title2"
  | "subtitle"
  | "profile-name"
  | "spotlight-num"
  | "spaced-caps"
  | "change-text"

type TypographyProps = {
  variant: Variant;
  children: string | number;
};

export default function Typography(props: TypographyProps) {
  const { variant, children } = props;
  return <p className={variant}>{children}</p>;
}
