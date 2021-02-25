import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand, Thumbnail } from './styles';
import styled from "styled-components";
import home from 'assets/illustrations/plothome.png';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <NavbarLinks/>
      <Brand theme={theme}>
        <img src={home} alt="company home logo" />
      </Brand>
    </Wrapper>
  );
};

export default Navbar;
