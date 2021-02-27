import React, { useContext } from 'react';
import { Link } from "gatsby";
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import render from 'assets/illustrations/render.png';
import { Scroll } from './Scroll';
import { Wrapper, IntroWrapper, Details, Thumbnail, ButtonGrow} from './styles';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';

// FIX: welcome to plot typing text is buggy mess

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>we're creating a utopia.</h1>
          <Typed
                    strings={['welcome to plöt.']}
                    typeSpeed={70}
                    showCursor={false}
                >
                <h4></h4></Typed>
          <ButtonGrow><Button theme={theme} as={Link} href="/waitlist">
            join the waitlist →
          </Button></ButtonGrow>
        </Details>
        <Thumbnail>
          <img src={render} alt="plöt house" />
        </Thumbnail>
        <Scroll/>
      </IntroWrapper>
    </Wrapper>
  );
};
