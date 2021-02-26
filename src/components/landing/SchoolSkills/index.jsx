import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import education from 'assets/illustrations/education.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const SchoolSkills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
      <Thumbnail theme={theme}>
        <img src={education} alt="person walking through forest" />
      </Thumbnail>
        <Details theme={theme}>
          <h1>we're reimagining education.</h1>
          <p>
          the world is becoming more digital and sustainable. our educational systems are still stuck in the industrial-era.
          <br/><br/>let's change that.

          <br/>
          <b>more info coming soon...</b>
          </p>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
