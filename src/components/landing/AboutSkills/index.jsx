import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, SkillsWrapper, Details, MathLine} from './styles';

export const AboutSkills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        {/*<Details theme={theme}>
          <h1>save money, save the planet.</h1>
          <p>
          $36,000   average US income<br/>
          <b>-</b>&ensp;&ensp;&ensp;&ensp;&ensp; $24,000   yearly cost of plöt living
          <MathLine><hr/></MathLine>
          <font color="green">&ensp;&ensp;$12,000   discretionary money</font>
          <br/><br/>
          <b>&ensp;&ensp;more info coming soon...</b>
          </p>
        </Details>*/}
      </SkillsWrapper>
    </Wrapper>
  );
};
