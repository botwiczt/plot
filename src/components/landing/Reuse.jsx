import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, Details } from './Waitlist/styles';

export const Reuse = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <Details theme={theme}>
        <h1>coming soon.</h1>
        <p>we're working on it!</p>
      </Details>
    </Wrapper>
  );
};
