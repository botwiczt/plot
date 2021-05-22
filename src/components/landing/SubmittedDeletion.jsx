import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, Details } from './Waitlist/styles';

export const SubmittedDeletion = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <Details theme={theme}>
        <h1>plöt waitlist removal</h1>
        <p>request received. your email will be permanently removed within one week.</p>
      </Details>
    </Wrapper>
  );
};
