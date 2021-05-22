import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, SkillsWrapper, Details } from './styles';

export const SubmittedDeletion = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
      <Details theme={theme}>
      <h1>plöt waitlist removal</h1>
      <p><b>request received. your email will be permanently removed within one week.</b></p>
      </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
