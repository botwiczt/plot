import React, {useContext} from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper, NavButton, NavHover } from './styles';
import home from 'assets/illustrations/homeicon.svg';
import school from 'assets/illustrations/schoolicon.svg';
import store from 'assets/illustrations/storeicon.svg';
import styled from "styled-components";

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>

    <Link to="/home" theme={theme}>
            <NavButton theme={theme} src={home}/>
              <NavHover theme={theme}>plöt │ home</NavHover>
          </Link>
    <Link to="/school" theme={theme}>
            <NavButton theme={theme} src={school}/>
              <NavHover theme={theme}>plöt │ school</NavHover>
          </Link>
    <Link to="/store" theme={theme}>
            <NavButton theme={theme} src={store}/>
              <NavHover theme={theme}>plöt │ store</NavHover>
          </Link>
    </Wrapper>
  )
};

export default NavbarLinks;
