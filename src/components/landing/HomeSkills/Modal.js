import React from "react";
import { ModalStyle, ModalStyleMain, CloseButton } from './styles';

export const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "ModalStyle display-block" : "ModalStyle display-none";

  return (
    <div className={showHideClassName}>
      <ModalStyleMain>
        {children}
        <CloseButton onClick={handleClose}>
          close
        </CloseButton><br/><br/>
      </ModalStyleMain>
    </div>
  );
};
