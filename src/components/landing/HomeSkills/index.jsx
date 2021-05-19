import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, SkillsWrapper, Details, MathLine} from './styles';
import { Dashboard } from './Dashboard';

// BUGS
// fix dashboard appearance on dark mode
// scroll down arrow does not invert
// can click slightly beneath most images...

// IMPROVEMENTS
// improve footer
// increase size of lock and toggle
// add back cursor to typing text

// fix scroll down arrow to be uninteractable when opacity = 0;
// it is interactable now even though it is invisible.

// FIX navbuttons: can active hover when slightly under button

// work on attribution of line on homepage, cap in store logo, icon on school page, and left back arrow

export const HomeSkills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Details theme={theme}>
          <h1>save money, save the planet.</h1>
          <p>
          $36,000   average US income<br/>
          <b>-</b>&ensp;&ensp;&ensp;&ensp;&ensp; $24,000   yearly cost of plöt living <Dashboard/>
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
