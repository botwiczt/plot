import React, { Component, useContext } from 'react';
import { Link } from "gatsby";
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, SkillsWrapper, Details, Thumbnail, RegisterButton, Input} from './styles';
import styled from 'styled-components';

export const ValuesSkills = () => {
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
