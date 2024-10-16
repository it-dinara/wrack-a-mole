import { useState, useCallback } from "react";
import s from "./Cell.module.css";
import classNames from "classnames";
import { clickCounter, setWinner } from "../../features/counter/counterSlice";
import { useAppSelector, useAppDispatch } from "../../app/store";

type Props = {
  moleImage?: string;
  boxImage?: string;
  alt?: string;
  mole: boolean;
};

const Cell = ({ moleImage, boxImage, mole, ...props }: Props) => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  let [isWracked, setIsWracked] = useState(false);
  const wrackFn = () => {
    if (count === 1) dispatch(setWinner(true));
    if (mole) {
      setIsWracked(true);
      dispatch(clickCounter());
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
      <img src={mole ? moleImage : boxImage} alt={props.alt} />
    </div>
  );
};

export default Cell;
