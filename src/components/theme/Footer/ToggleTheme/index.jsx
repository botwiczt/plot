import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper } from './styles';
import sunIcon from 'assets/icons/sun.svg';
import moonIcon from 'assets/icons/moon.svg';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper type="button" onClick={toggleTheme} theme={theme}>
      <img src={theme === 'light' ? moonIcon : sunIcon} alt={theme} />
    </Wrapper>
  );
};

export default ToggleTheme;
