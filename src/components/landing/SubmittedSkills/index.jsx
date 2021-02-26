import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, SkillsWrapper, Details } from './styles';

export const SubmittedSkills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
      <Details theme={theme}>
      <h1>plöt waitlist</h1>
      <p><b><span aria-label="fire" role="img">
        🔥</span> thanks for submitting!</b></p>
      </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
