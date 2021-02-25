import React, { Component } from "react";
import { Modal } from './Modal';
import { OpenButton } from './styles';

export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <br/>
          <b>base package includes:</b>
          <br/><p>
          <span role="img" aria-label="bed emoji">🛏</span>️ your own plöt home<br/>
          <span role="img" aria-label="water emoji">🚰</span>️ crisp, clean water<br/>
          <span role="img" aria-label="power emoji">🔌</span>️ solar-generated power<br/>
          <span role="img" aria-label="sun emoji">☀️</span>️ fossil-free heating<br/>
          <span role="img" aria-label="internet emoji">🌐</span>️ gigabit internet<br/>
          </p>
          <b><font color="#00FF00"><b><u> plöt+ includes:</u></b></font></b>
          <br/><p>
          <span role="img" aria-label="finger pointing up emoji">☝️</span>️ everything above<br/>
          <span role="img" aria-label="lettuce emoji">🥬</span>️ 3 daily meals @ plöt cafe<br/>
          <span role="img" aria-label="sweating emoji">🥵</span>️ sauna access<br/>
          <span role="img" aria-label="tools emoji">🛠️</span>️ priority support<br/>
          </p>
        </Modal>
        <OpenButton onClick={this.showModal}>
          what's included?
        </OpenButton>
      </main>
    );
  }
}
