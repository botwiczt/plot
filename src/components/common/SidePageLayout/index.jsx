import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Global } from './styles';
import './fonts.css';

export const SidePageLayout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Global theme={theme} />
      {children}
    </>
  );
};
