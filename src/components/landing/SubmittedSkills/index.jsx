import React, { Component, useContext } from 'react';
import { Link } from "gatsby";
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, SkillsWrapper, Details, Thumbnail} from './styles';
import styled from 'styled-components';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

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
