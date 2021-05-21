import React, { useContext } from "react";
import Modal from "./Modal";
import useModal from "./useModal";
import { Button } from 'components/common';
import { ThemeContext } from 'providers/ThemeProvider';

const ModalApp = () => {
  const {isVisible, toggleModal} = useModal();
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Button onClick={toggleModal} theme={theme}>
        what's included?
      </Button>
      <Modal isVisible={isVisible} hideModal={toggleModal}/>
    </div>
  );
};

export default ModalApp;
