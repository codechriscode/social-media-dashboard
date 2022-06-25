import "./styles.css";

import React from "react";

type ModalProps = { children: React.ReactChild };

export default function Modal(props: ModalProps) {
  const { children } = props;

  return (
    <div style={{ padding: "3em" }} className="card modal">
      {children}
    </div>
  );
}
