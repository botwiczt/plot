import React, { Component, useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { ArrowImage } from "./styles";
import styled from "styled-components";
import downarrow from 'assets/illustrations/downarrow.png';

const ScrollVanish = styled.div`
z-index:200;
position: fixed;
bottom:0;
transition:opacity 0.5s ease,visibility 0s ease 0.5s;
  transition-delay:0s;
  `;

export class Scroll extends Component {

  state = {
    opacity: '1'
  }

  state = {
    visibility: 'visible'
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos > 0 ) {
          this.setState({ opacity: "0" })
          this.setState({ visibility: "hidden" })
        } else {
          this.setState({ opacity: "1" })
          this.setState({ visibility: "visible" })
        }
      }
    }
  }

  render() {
    return (
        <ScrollVanish style={{ opacity: `${this.state.opacity}`}, { visibility: `${this.state.visibility}`}} >
         <a href="#down" aria-label="scroll down"><ArrowImage src={downarrow}/></a>
        </ScrollVanish>
    )
  }
}
