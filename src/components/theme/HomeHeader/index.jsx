import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import { Wrapper, ArrowWrapper, NavButton, Brand } from './styles';
import plothome from 'assets/illustrations/plothome.svg';
import leftarrow from 'assets/illustrations/leftarrow.svg';

export const HomeHeader = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <ArrowWrapper>
        <Link to="/">
          <NavButton theme={theme} src={leftarrow}/>
        </Link>
      </ArrowWrapper>
      <Brand theme={theme} src={plothome} alt="plöt home logo"/>
    </Wrapper>
  );
};
