import MainCard from "../../molecules/Cards/MainCard";

import "../styles.css";
import React, { useState } from "react";
import { MockType } from "../../../mock/payload";

const handleDragStart = (e: React.DragEvent<HTMLSpanElement>) => {
  const mediumName = getMediumFromCard(e.currentTarget);
  e.dataTransfer.setData("dragged", mediumName);
};

const allowDrop = (e: React.DragEvent<HTMLSpanElement>) => {
  e.preventDefault();
};

const getMediumFromCard = (card: HTMLElement) => {
  return card.classList[card.classList.length - 1];
};

type ScoreboardProps = { media: MockType["media"]; period: MockType["period"] };

export default function Scoreboard(props: ScoreboardProps) {
  const { media, period } = props;

  const getPositions = () => {
    let lsPos = localStorage.getItem("mainCardPositions");
    if (lsPos) return JSON.parse(lsPos) as Array<string>;
    return Object.keys(media);
  };

  const [positions, setPositions] = useState(getPositions());

  const finishMove = (e: React.DragEvent<HTMLElement>) => {
    const beingDropped = e.dataTransfer.getData("dragged");
    const droppedOver = getMediumFromCard(e.currentTarget);
    const newIndex = positions.findIndex((medium) => medium === droppedOver);
    const oldIndex = positions.findIndex((medium) => medium === beingDropped);

    let newPositions = [...positions];
    newPositions.splice(oldIndex, 1);
    newPositions.splice(newIndex, 0, beingDropped);
    // update state and localStorage
    setPositions(newPositions);
    localStorage.setItem("mainCardPositions", JSON.stringify(newPositions));
  };

  return (
    <div className="grid-container">
      {positions.map((mediumName) => {
        const medium = media[mediumName];
        const identifier = `${medium.name}.${medium.username}.Main`;
        return (
          <MainCard
            draggable
            ondragstart={handleDragStart}
            ondragover={allowDrop}
            ondrop={finishMove}
            name={medium.name}
            status={medium.status}
            period={period}
            username={medium.username}
            key={identifier}
          />
        );
      })}
    </div>
  );
}
