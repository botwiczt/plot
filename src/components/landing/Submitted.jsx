import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, Details } from './Waitlist/styles';

export const Submitted = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <Details theme={theme}>
      <h1>plöt waitlist</h1>
      <p>
        <span aria-label="fire" role="img">
          🔥
        </span> thanks for submitting!
      </p>
      </Details>
    </Wrapper>
  );
};
