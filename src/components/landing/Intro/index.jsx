import React, { useContext } from 'react';
import { Link } from "gatsby";
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import render from 'assets/illustrations/render.png';
import { Scroll } from './Scroll';
import { Wrapper, BodyWrapper, Details, Thumbnail, ButtonGrow} from './styles';
import { Typing } from "typing-effect-reactjs";

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header/>
      <BodyWrapper as={Container}>
        <Details theme={theme}>
          <h1>we're creating a utopia.</h1>

          <Typing
  text={[
    "welcome to plöt.",
  ]}
  typeSpeed={80}
  disableBlinkingOnEnd={5}
/>
          <ButtonGrow><Button theme={theme} as={Link} href="/waitlist">
            join the waitlist →
          </Button></ButtonGrow>
        </Details>
        <Thumbnail>
          <img src={render} alt="plöt house" />
        </Thumbnail>
        <Scroll/>
      </BodyWrapper>
    </Wrapper>
  );
};
