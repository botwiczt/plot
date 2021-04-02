import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { StoreHeader } from 'components/theme';
import { Container } from 'components/common';
import store from 'assets/illustrations/store.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const StoreIntro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <StoreHeader />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h4>local.<br/>zero waste.<br/>plant-based <span aria-label="plant" role="img">
            🌱️
          </span>.</h4>
        </Details>
        <Thumbnail>
          <img src={store} alt="person with shopping basket holding an apple" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
