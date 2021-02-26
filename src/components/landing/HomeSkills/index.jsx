import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, SkillsWrapper, Details, MathLine} from './styles';
import { Dashboard } from './Dashboard';

// ** IMPLEMENT DASHBOARD **
// ** RE-ADD TYPING **
// X in sidebar does not invert
// scroll down arrow does not invert
// scroll down arrow appears in sidebar
// lock and toggle aren't centered on mobile
// update react?

// app icon on phone is glitchy
// improve footer

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

          <MathLine><hr/></MathLine>
          <font color="green">&ensp;&ensp;$12,000   discretionary money</font>
          <br/><br/>
          <b>&ensp;&ensp;more info coming soon...</b>
          </p>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
