import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, SkillsWrapper, Details } from './styles';
import { Dashboard } from './Dashboard';

// IMPLEMENT DASHBOARD
// LINE IN MATH DOES NOT INVERT IN DARK mode
// REIMPLEMENT TYPING ON HEADER
// X IN SIDEBAR DOES NOT invert
// FOOTER LOOKS WEIRD
// SCROLL DOWN ARROW DOES NOT invert
// SCROLL DOWN ARROW APPEARS IN SIDEBAR
// READD TYPING
// ADD BACK FADE IN
// app icon is garbage
// lack and togg;e arent centered on mobile

export const HomeSkills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
    {/*<Dashboard/>*/}
      <SkillsWrapper as={Container}>
        <Details theme={theme}>
          <h1>save money, save the planet.</h1>
          <p>
          &ensp;&ensp;$36,000   average US income<br/>
          <b>-</b> $24,000   yearly cost of plöt living

          <hr width="70%"/>
          <font color="green">&ensp;&ensp;$12,000   discretionary money</font>
          <br/><br/>
          <b>&ensp;&ensp;more info coming soon...</b>
          </p>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
