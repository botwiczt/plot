import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import { Wrapper, ArrowWrapper, NavButton, Brand } from './styles';
import logo from 'assets/illustrations/logo.svg';
import leftarrow from 'assets/illustrations/leftarrow.svg';

export const GenericHeader = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <ArrowWrapper>
        <Link to="/">
          <NavButton theme={theme} src={leftarrow}/>
        </Link>
      </ArrowWrapper>
      <Brand theme={theme} src={logo} alt="plöt logo"/>
    </Wrapper>
  );
};
