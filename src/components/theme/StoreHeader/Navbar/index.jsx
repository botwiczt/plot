import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand } from './styles';
import store from 'assets/illustrations/plotstore.png';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <NavbarLinks/>
      <Brand theme={theme}>
        <img src={store} alt="company store logo" />
      </Brand>
    </Wrapper>
  );
};

export default Navbar;
