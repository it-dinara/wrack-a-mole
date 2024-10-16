import React, { MouseEventHandler } from "react";
import s from "./Start.module.css";

type Props = {
  clicked: MouseEventHandler<HTMLButtonElement>;
  started: boolean;
};

const startHandler = () => {};

function test(event: MouseEvent) {
  console.log("test", event);
}

function Mole({ clicked, started }: Props) {
  return (
    <button type="button" onClick={clicked}>
      {!started ? "Start" : "Restart"}
    </button>
  );
}

export default Mole;
