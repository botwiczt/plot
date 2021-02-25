import React, { useContext } from 'react';
import { Link } from "gatsby";
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import education from 'assets/illustrations/education.svg';
import moving from 'assets/illustrations/moving.svg';
import values from 'assets/illustrations/values.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail, ValueDetails} from './styles';

export const SchoolSkills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
      <Thumbnail theme={theme}>
        <img src={education} alt="picture of woman walking through forest" />
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
