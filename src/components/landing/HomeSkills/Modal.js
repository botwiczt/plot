import React from "react";
import { ModalStyle, ModalStyleMain, CloseButton } from './styles';
import "./modal.css";
import exit from 'assets/illustrations/exit.svg';


export const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "ModalStyle display-block" : "ModalStyle display-none";

  return (
    <div className={showHideClassName}>
    <br/>
      <ModalStyleMain>
      <br/>
      <CloseButton src={exit} onClick={handleClose} alt="person with shopping basket holding an apple"/>
        {children}
      </ModalStyleMain>
    </div>
  );
};
