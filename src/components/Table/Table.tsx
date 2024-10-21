import { useState } from "react";
import Cell from "../Cell/Cell";
import Start from "../Start/Start";
import s from "./Table.module.css";
import { useAppDispatch, useAppSelector } from "../../app/store";
import {
  isFailedAction,
  resetMolesCounter,
  isWonAction,
} from "../../features/counter/counterSlice";

type Props = {};

function Table({}: Props) {
  const cells = useAppSelector((state) => state.counter.cells);
  console.log("cells", cells);
  let [started, setStarted] = useState(false);
  let [resetPage, setResetPage] = useState(0);
  let [timerId, setTimerId] = useState(0);
  const isWinner = useAppSelector((state) => state.counter.isWon);
  const dispatch = useAppDispatch();
  let [showMole, setShowMole] = useState(false);
  let [randomMole, setRandomMole] = useState(-1);
  const gameHandler = () => {
    setStarted(true);
    clearInterval(timerId);
    let cellsLength = 8;
    let id = setInterval(() => {
      const randomNum = Math.round(Math.random() * cellsLength);
      setRandomMole(randomNum);
      setShowMole((mole) => !mole);
      console.log("showMole", showMole);
    }, 3000);
    setTimerId(id);
  };

  const startGameHandler = () => {
    clearInterval(timerId);
    setResetPage((key) => key + 1);
    dispatch(isWonAction(false));
    dispatch(isFailedAction(false));
    dispatch(resetMolesCounter());

    gameHandler();
  };

  const table = cells.map((_, index) => {
    const showed =
      index === randomMole &&
      !isWinner &&
      showMole &&
      cells[randomMole] === "...";
    console.log("showed", showed);
    return (
      <Cell
        key={index}
        alt={"cell"}
        mole={showed}
        index={index}
        timerId={timerId}
      />
    );
  });

  return (
    <div key={resetPage}>
      <Start clicked={startGameHandler} started={started} />
      <div className={s.Table}>{table}</div>
    </div>
  );
}

export default Table;
