import React, { useContext } from 'react';
import { Link } from "gatsby";
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import render from 'assets/illustrations/render.png';
import { Scroll } from './Scroll';
import { Wrapper, IntroWrapper, Details, Thumbnail, ButtonGrow} from './styles';

// FIX: welcome to plot typing text is buggy mess

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>we're creating a utopia.</h1>
          <h4>welcome to plöt.</h4>
          <ButtonGrow><Button theme={theme} as={Link} href="/waitlist">
            join the waitlist →
          </Button></ButtonGrow>
        </Details>
        <Thumbnail>
          <img src={render} alt="image of plöt house" />
        </Thumbnail>
        <Scroll/>
      </IntroWrapper>
    </Wrapper>
  );
};
