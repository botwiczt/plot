import React, { Component } from "react";
import Modal from './Modal.js';
import './dashboard.css';

class Dashboard extends Component {
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
          🛏️ your own plöt<br/>
          🚰 crisp, clean water<br/>
          🔌 solar-generated power<br/>
          ☀️ fossil-free heating<br/>
          🌐 gigabit internet<br/>
          </p>
          <b><font color="#00FF00"><b><u> plöt+ includes:</u></b></font></b>
          <br/><p>
          ☝️ everything above<br/>
          🥬 3 daily meals @ plöt cafe<br/>
          🥵 sauna access<br/>
          🛠️ priority support<br/>
          </p>
        </Modal>
        <h4 className="openbutton" onClick={this.showModal}>
          what's included?
        </h4>
      </main>
    );
  }
}

export default Dashboard
