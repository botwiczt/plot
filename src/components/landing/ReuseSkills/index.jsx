import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, SkillsWrapper, Details } from './styles';

export const ReuseSkills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
      <Details theme={theme}>
      <h1>coming soon.</h1>
      <p><b>we're working on it!</b></p>
      </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
