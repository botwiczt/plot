import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, Brand, Wrapper2, NavButton } from './styles';
import logo from 'assets/illustrations/logo.svg';
import { Link } from 'gatsby';
import back from 'assets/illustrations/leftarrow.svg';

export const GenericHeader = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <Wrapper2 theme={theme}>
        <Link to="/" theme={theme}>
          <NavButton theme={theme} src={back}/>
        </Link>
      </Wrapper2>
      <Brand theme={theme}>
        <img src={logo} alt="company logo" />
      </Brand>
    </Wrapper>
  );
};

export default GenericHeader;
