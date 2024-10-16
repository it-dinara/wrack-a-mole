import React, { useState } from "react";
import s from "./Popup.module.css";
import classNames from "classnames";

export interface Props {
  text: string;
}

const Popup = ({ text }: Props) => {
  const [closePopup, setClosePopup] = useState(false);
  const closePopupHandler = () => {
    setClosePopup(true);
  };
  return (
    <div className={classNames(s.Wrapper, closePopup && s.Closed)}>
      <div className={s.Cover} onClick={closePopupHandler}></div>
      <div className={s.Popup}>
        <i className={s.Close} onClick={closePopupHandler}></i>
        <div className={s.ContentBlock}>
          <p className={s.Content}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
