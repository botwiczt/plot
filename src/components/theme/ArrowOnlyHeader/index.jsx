import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import { Wrapper, ArrowWrapper, NavButton } from './styles';
import leftarrow from 'assets/illustrations/leftarrow.svg';

export const ArrowOnlyHeader = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <ArrowWrapper>
        <Link to="/">
          <NavButton theme={theme} src={leftarrow} alt="arrow to return to homepage"/>
        </Link>
      </ArrowWrapper>
    </Wrapper>
  );
};
