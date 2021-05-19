import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand } from './styles';
import logo from 'assets/illustrations/plotschoolcap.png';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <NavbarLinks/>
      <Brand theme={theme}>
        <img src={logo} alt="company logo" />
      </Brand>
    </Wrapper>
  );
};

export default Navbar;
