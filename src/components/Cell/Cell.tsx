import { useState, memo } from "react";
import s from "./Cell.module.css";
import classNames from "classnames";
import {
  counterWrackedMoles,
  isWonAction,
  saveInArrayWrackedMoles,
  isFailedAction,
  counterMissedMoles,
  saveInArrayMissedMoles,
} from "../../features/counter/counterSlice";
import { useAppSelector, useAppDispatch } from "../../app/store";

type Props = {
  moleImage?: string;
  boxImage?: string;
  alt?: string;
  mole: boolean;
  index: number;
};

const Cell = memo(({ moleImage, boxImage, mole, index }: Props) => {
  const dispatch = useAppDispatch();
  const wrackedMoles = useAppSelector((state) => state.counter.wrackedMoles);
  const missedMoles = useAppSelector((state) => state.counter.missedMoles);
  const isFailed = useAppSelector((state) => state.counter.isFailed);
  let [isWracked, setIsWracked] = useState(false);

  const wrackFn = () => {
    if (mole) {
      console.log("cell's mole");
      if (wrackedMoles === 2) {
        dispatch(isWonAction(true));
      }
      dispatch(saveInArrayWrackedMoles(index));
      dispatch(counterWrackedMoles());
      setIsWracked(true);
    }
    if (!mole) {
      console.log("empty cell", missedMoles, isFailed);
      if (missedMoles === 2) {
        dispatch(isFailedAction(true));
      }
      dispatch(saveInArrayMissedMoles(index));
      dispatch(counterMissedMoles());
    }
  };

  return (
    <div
      className={classNames(
        s.Cell,
        mole && !isWracked && s.Mole,
        isWracked && [s.Wracked, s.Mole]
      )}
      onClick={wrackFn}
    >
      {/* <img src={mole ? moleImage : boxImage} alt={props.alt} /> */}
    </div>
  );
});

export default Cell;
