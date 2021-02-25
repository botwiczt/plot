import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand, Thumbnail } from './styles';
import styled from "styled-components";
import logo from 'assets/illustrations/logo.svg';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/" theme={theme}>
        <img src={logo} alt="company logo" />
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
