import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand, Thumbnail } from './styles';
import styled from "styled-components";
import school from 'assets/illustrations/plotschoolcap.png';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <NavbarLinks/>
      <Brand theme={theme}>
        <img src={school} alt="company school logo" />
      </Brand>
    </Wrapper>
  );
};

export default Navbar;
