import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import { Wrapper, ArrowWrapper, NavButton, Brand } from './SubBrandStyles';
import plotstore from 'assets/illustrations/plotstore.svg';
import leftarrow from 'assets/illustrations/leftarrow.svg';

export const StoreHeader = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <ArrowWrapper>
        <Link to="/">
          <NavButton theme={theme} src={leftarrow}/>
        </Link>
      </ArrowWrapper>
      <Brand theme={theme} src={plotstore} alt="plöt store logo"/>
    </Wrapper>
  );
};
