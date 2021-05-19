import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { ArrowOnlyHeader } from 'components/theme';
import { Container } from 'components/common';
import logo from 'assets/illustrations/logo.svg';
import { Wrapper, IntroWrapper, Thumbnail } from './styles';

export const PrivacyIntro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <ArrowOnlyHeader />
      <IntroWrapper as={Container}>
        <Thumbnail theme={theme}>
          <img src={logo} alt="company logo" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
