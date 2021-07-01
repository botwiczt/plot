import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, SkillsWrapper, Details, MathLine, BoxWrapper} from './styles';
import ModalApp from './ModalApp';
import App from './App';

// BUGS
// *CRITICAL* ALL: small bug with rapid scrolling up on ScrollArrow
// *CRITICAL* ALL: typing cursor is black on darkmode
// ALL: can click slightly beneath most images...
// MOBILE: input box still seems to get weird around border-radius...
// MOBILE: laggier burger menu

// IMPROVEMENTS

// MOBILE: add footer hovers
// MOBILE: make header fill screen
// ALL: ScrollArrow JavaScript is taxing, find alternative
// ALL: fix hovering slightly under NavButtons
// ALL: complete attribution of line on homepage, cap in store logo, icon on school page, and left back arrow

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
