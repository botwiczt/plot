import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { GenericHeader } from 'components/theme';
import { Container } from 'components/common';
import forest from 'assets/illustrations/forest.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const AboutIntro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <GenericHeader />
      <h1>about us coming soon.</h1>
      {/*<IntroWrapper as={Container}>
        <Details theme={theme}>
          <h4>3D printed. <br/>sustainable. <br/>futuristic.</h4>
        </Details>
        <Thumbnail>
          <img src={forest} alt="girl in a forest" />
        </Thumbnail>
      </IntroWrapper>*/}
    </Wrapper>
  );
};
