import React, { Component, useContext, useEffect, useState} from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import styled from "styled-components";
import downarrow from 'assets/illustrations/downarrow.png';
import { ArrowImage } from "./styles";
import { debounce } from './debounce';  

export const Scroll = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0); 
  const [visible, setVisible] = useState(true);  
  const { theme } = useContext(ThemeContext);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 50);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: 'fixed',
    bottom: '0',
    textAlign: 'center',
    zIndex: '200',
    transition: 'opacity 0.5s ease'
  }

  return (
    <a href="#down" aria-label="scroll down"><ArrowImage theme={theme} src={downarrow} style={{ ...navbarStyles, bottom: visible ? '5px' : '-100px' }}/></a>
  );
};
