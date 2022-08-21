import React from "react";
import "./styles.css";

type BoxClasses = "center-column" | "center-row" | "corner-row";
type BoxProps = {
  boxClass: BoxClasses;
  children: React.ReactNode;
  style?: React.CSSProperties;
  id?: string;
};

export default function Box(props: BoxProps) {
  const { boxClass, children, style, id } = props;
  return (
    <div className={boxClass} style={{ ...style }} id={id}>
      {children}
    </div>
  );
}
