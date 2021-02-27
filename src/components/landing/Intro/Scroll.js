import React, { Component, useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import styled from "styled-components";
import downarrow from 'assets/illustrations/downarrow.png';
import { ArrowImage } from "./styles";

const ScrollVanish = styled.div`
z-index:200;
position: fixed;
bottom:0;
transition: opacity 0.5s ease;
`;

// TODO:
// fix scroll down arrow to be uninteractable when opacity = 0;
// it is interactable now even though it is invisible.

// TURN SCROLL ARROW FROM IMAGE INTO EMOJI.

export class Scroll extends Component {

  state = {
    opacity: '1'
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos > 0 ) {
          this.setState({ opacity: "0" })
        } else {
          this.setState({ opacity: "1" })
        }
      }
    }
  }

  render() {
    return (
        <ScrollVanish style={{ opacity: `${this.state.opacity}`}} >
         <a href="#down" aria-label="scroll down"><ArrowImage src={downarrow}/></a>
        </ScrollVanish>
    )
  }
}
