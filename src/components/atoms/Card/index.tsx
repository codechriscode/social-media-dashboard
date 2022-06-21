import { ReactNode } from "react";
import "./styles.css";

export type CardProps = {
  children?: ReactNode;
  cardClass?: string;
  draggable?: boolean;
  //break indo draggable/droppable wrapper?
  onclick?: () => {};
  ondragstart?: React.DragEventHandler;
  ondragover?: React.DragEventHandler;
  ondrop?: React.DragEventHandler;
  id?: string;
  period?: number;
};

export default function Card(props: CardProps) {
  const {
    children,
    cardClass,
    draggable,
    onclick,
    ondragstart,
    ondragover,
    ondrop,
    id,
  } = props;

  return (
    <span
      className={`card ${cardClass}`}
      id={id}
      draggable={draggable}
      onClick={onclick}
      onDragStart={ondragstart}
      onDragOver={ondragover}
      onDrop={ondrop}
    >
      {children}
    </span>
  );
}
