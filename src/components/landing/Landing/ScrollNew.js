import React, { Component, useContext, useEffect, useState} from 'react';
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

export const Scroll = () => {
  const { theme } = useContext(ThemeContext);

  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
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
  });

  return (
    <ScrollVanish opacity={opacity} {/*onScroll={() => onScroll(!opacity)}*/} >
     <a href="#down" aria-label="scroll down"><ArrowImage theme={theme} src={downarrow}/></a>
    </ScrollVanish>
  );
};
