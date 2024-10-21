import Popup from "../Popup/Popup";
import Table from "../Table/Table";
import { useAppSelector } from "../../app/store";

export interface Props {}

const Game = () => {
  const isWon = useAppSelector((state) => state.counter.isWon);
  const isFailed = useAppSelector((state) => state.counter.isFailed);
  return (
    <>
      {isWon && <Popup text={"You won!"} />}
      {isFailed && <Popup text={"You lose!"} />}
      <Table />
    </>
  );
};

export default Game;
