import React from "react";
import s from "./Game.module.css";
import Popup from "../Popup/Popup";
import Table from "../Table/Table";
import { useAppSelector } from "../../app/store";

export interface Props {}

const Game = () => {
  const winner = useAppSelector((state) => state.counter.isWinner);
  return (
    <>
      {winner && <Popup text={"You won!"} />}
      <Table />
    </>
  );
};

export default Game;
