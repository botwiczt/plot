import React, { useContext } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { ThemeContext } from 'providers/ThemeProvider';
import { CloseButton, TitleColor, TextColor } from './styles';
import exit from 'assets/illustrations/exit.svg';

const ModalOverlay = styled.div`
  background-color: #999999;
  height: 100vh;
  left: 0;
  opacity: 0.5;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 500;
`;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  left: 0;
  outline: 0;
  overflow-x: auto;
  overflow-y: auto;
  position: fixed;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  box-sizing:border-box;
  width:600px;
  max-width:calc(100% - 80px);
  max-height:calc(100% - 80px);
  z-index: 1000;
`;

const SModal = styled.div`
  align-items: center;
  background: ${({ theme }) => (theme === 'dark' ? '#212121' : '#fff')};
  border: solid 15px #000000;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  width: auto;
  padding-left: 90px;
  padding-right: 90px;
  padding-top: 20px;
  position: relative;
  overflow:auto;
  max-height:calc(100vh - 125px);
  z-index: 100;
  @media (max-width: 500px) {
    padding-left: 60px;
    padding-right: 60px;
    padding-top: 40px;
  }
  @media (max-width: 400px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 380px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (max-width: 300px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const SHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Modal = ({ isVisible, hideModal }) => {
  const { theme } = useContext(ThemeContext);

  return isVisible
    ? createPortal(
        <React.Fragment>
          <ModalOverlay/>
          <ModalWrapper
            aria-modal={true}
            aria-hidden={true}
            tabIndex={-1}
            role="dialog"
          >
            <SModal theme={theme}>
              <CloseButton src={exit} onClick={hideModal} theme={theme} alt="close button"/>
              <SHeader>
                <TitleColor theme={theme}><br/>
                <b>base package includes:</b>
                <br/><TextColor theme={theme}>
                <span role="img" aria-label="bed emoji">🛏</span>️ your own plöt home<br/>
                <span role="img" aria-label="water emoji">🚰</span>️ crisp, clean water<br/>
                <span role="img" aria-label="power emoji">🔌</span>️ solar-generated power<br/>
                <span role="img" aria-label="sun emoji">☀️</span>️ fossil-free heating<br/>
                <span role="img" aria-label="internet emoji">🌐</span>️ gigabit internet<br/>
                </TextColor>
                <b><font color="#00FF00"><b><u> plöt+ includes:</u></b></font></b>
                <br/><TextColor theme={theme}>
                <span role="img" aria-label="finger pointing up emoji">☝️</span>️ everything above<br/>
                <span role="img" aria-label="lettuce emoji">🥬</span>️ 3 daily meals @ plöt cafe<br/>
                <span role="img" aria-label="sweating emoji">🥵</span>️ sauna access<br/>
                <span role="img" aria-label="tools emoji">🛠️</span>️ priority support<br/>
                </TextColor></TitleColor>
              </SHeader>
            </SModal>
          </ModalWrapper>
        </React.Fragment>,
        document.body,
      )
    : null;
};

export default Modal;
