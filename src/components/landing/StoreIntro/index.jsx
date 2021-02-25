import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { StoreHeader } from 'components/theme';
import { Container, Button } from 'components/common';
import store from 'assets/illustrations/store.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail, ButtonGrow} from './styles';

// FIX: welcome to plot typing text is buggy mess

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
          <img src={store} alt="image of girl with shopping basket holding an apple" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
