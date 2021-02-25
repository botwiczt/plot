import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { SchoolHeader } from 'components/theme';
import { Container, Button } from 'components/common';
import school from 'assets/illustrations/school.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail, ButtonGrow} from './styles';

// FIX: welcome to plot typing text is buggy mess

export const SchoolIntro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <SchoolHeader />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h4>achieve mastery.<br/><font color="green">not grades.</font></h4>
        </Details>
        <Thumbnail>
          <img src={school} alt="image of boy writing at a desk" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
