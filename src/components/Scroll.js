import React, { Component } from 'react';
import styled from "styled-components";
import "./layout.css"

const ArrowImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 6%;
  position: fixed;
  bottom: 0;
  left: 47%;
  animation: 1s Zoom linear infinite,
  1s Always ease alternate infinite;
  }
  @keyframes Zoom {
      100% { background-position: 100vw 0px; }
  }

  @keyframes Always {
      100% { transform: scale(1.2);}
  }
  @media only screen and (max-width: 768px) {
    left: 44%;
    width: 12%;
  }
`;

// TODO:
// fix scroll down arrow to be uninteractable when opacity = 0;
// it is interactable now even though it is invisible.

// FIX MOBILE SCROLL ARROW TO ACTUALLY WORK

// TURN SCROLL ARROW FROM IMAGE INTO EMOJI.

class Scroll extends Component {
  state = {
    opacity: '1'
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        // console.log(maxScroll)
        if (currentScrollPos > 0 ) {
          this.setState({ opacity: "0" })
          // console.log(currentScrollPos)
        } else {
          this.setState({ opacity: "1" })
        }
      }
    }
  }

  render() {
    return (
        <div className="scrollvanish" style={{ opacity: `${this.state.opacity}`}} >
         <a href="#down" aria-label="scroll down"><ArrowImage src="/downarrow.png"/></a>
        </div>
    )
  }
}

export default Scroll
