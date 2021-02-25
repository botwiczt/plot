import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { HomeHeader } from 'components/theme';
import { Container, Button } from 'components/common';
import forest from 'assets/illustrations/forest.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail, ButtonGrow} from './styles';

// FIX: welcome to plot typing text is buggy mess

export const HomeIntro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <HomeHeader />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h4>3D printed. <br/>sustainable. <br/>futuristic.</h4>
        </Details>
        <Thumbnail>
          <img src={forest} alt="image of girl in a forest" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
