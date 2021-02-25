import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import MobileNavbarLinks from '../MobileNavbarLinks';
import { Wrapper } from './styles';

const Sidebar = ({ sidebar, toggle }) => {
  const { theme } = useContext(ThemeContext);

  return (
  <Wrapper active={sidebar} onClick={toggle} theme={theme}>
    <MobileNavbarLinks />
  </Wrapper>
  )
};

export default Sidebar;
