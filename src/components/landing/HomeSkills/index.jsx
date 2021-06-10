import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, SkillsWrapper, Details, MathLine, BoxWrapper} from './styles';
import ModalApp from './ModalApp';
import App from './App';

// BUGS
// scroll down arrow FIXED but JS is very taxing; small bug with rapid scrolling up
// can click slightly beneath most images...
// cursor is not visible in darkmode
// banner height bug persists in mobile
// input box still seems to get weird around border-radius...

// IMPROVEMENTS

// RE-ADD footer hover-tail; removed because glitching for email but important for knowing location
// fix navbuttons: can active hover when slightly under button
// work on attribution of line on homepage, cap in store logo, icon on school page, and left back arrow

export const HomeSkills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Details theme={theme}>
        <App/>
        <BoxWrapper>
          <h1>save money, save the planet.</h1>
          <p>
          $36,000   average US income<br/>
          <b>-</b>&ensp;&ensp;&ensp;&ensp;&ensp; $24,000   yearly cost of plöt living </p><ModalApp/><p>
          <MathLine><hr/></MathLine>
          <font color="green">&ensp;&ensp;$12,000   discretionary money</font>
          <br/><br/>
          <b>&ensp;&ensp;more info coming soon...</b>
          </p>
          </BoxWrapper>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
