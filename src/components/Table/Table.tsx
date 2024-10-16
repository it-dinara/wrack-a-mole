import { useMemo, useState } from "react";
import Cell from "../Cell/Cell";
import Start from "../Start/Start";
import s from "./Table.module.css";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { setWinner } from "../../features/counter/counterSlice";

type Props = {};

function Table({}: Props) {
  let arr = new Array(9).fill("");
  let [mole, setMole] = useState(false);
  let [started, setStarted] = useState(false);
  let [key, setKey] = useState(0);
  let [timerId, setTimerId] = useState(0);
  const isWinner = useAppSelector((state) => state.counter.isWinner);
  isWinner && clearInterval(timerId);
  console.log("TABLE");
  const dispatch = useAppDispatch();

  const moleShowed = Math.round(Math.random() * 8);
  const makeStartDelay = () => {
    restartGame();

    let id = setInterval(() => {
      setMole((mole) => !mole);
    }, 2000);
    // isWinner && clearInterval(id);
    // To delay start after the btn "Start/Restart" was clicked
    setTimerId(id);
  };

  const restartGame = () => {
    // setKey - to reset page when click btn "Restart"
    console.log("restart");

    setKey((key) => key + 1);
    setStarted(true);
  };

  const startGameHandler = () => {
    console.log("start", isWinner);
    clearInterval(timerId);
    dispatch(setWinner(false));
    setTimeout(makeStartDelay, 3000);
  };

  const table = arr.map((cell, index) => {
    return (
      <Cell
        key={index}
        alt={cell.alt}
        mole={index === moleShowed && !isWinner && mole}
      />
    );
  });

  return (
    <div key={key}>
      <Start clicked={startGameHandler} started={started} />
      <div className={s.Table}>{table}</div>
    </div>
  );
}

export default Table;
