import React from 'react';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Navbar = () => (
    <Wrapper as={Container}>
      <NavbarLinks/>
    </Wrapper>
);

export default Navbar;
