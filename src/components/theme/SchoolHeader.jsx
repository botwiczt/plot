import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import { Wrapper, ArrowWrapper, NavButton, Brand } from './SubBrandStyles';
import plotschool from 'assets/illustrations/plotschoolcap.png';
import leftarrow from 'assets/illustrations/leftarrow.svg';

export const SchoolHeader = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <ArrowWrapper>
        <Link to="/">
          <NavButton theme={theme} src={leftarrow}/>
        </Link>
      </ArrowWrapper>
      <Brand theme={theme} src={plotschool} alt="plöt school logo"/>
    </Wrapper>
  );
};
