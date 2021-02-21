import React from "react";
import './modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <h1 className="closebutton" onClick={handleClose}>
          close
        </h1><br/><br/>
      </section>
    </div>
  );
};

export default Modal
