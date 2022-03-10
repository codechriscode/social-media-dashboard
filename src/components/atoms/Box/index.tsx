import React from 'react';
import './styles.css'

type BoxClasses = "center-column" | "center-row" | "corner-row";
type BoxProps = {
  boxClass: BoxClasses,
  children: React.ReactNode
};

export default function Box(props: BoxProps) {
  const { boxClass, children } = props;
  return <div className={boxClass}>
    {children}
    </div>
}