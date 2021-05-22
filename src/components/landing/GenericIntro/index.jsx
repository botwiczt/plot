import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { ArrowOnlyHeader } from 'components/theme';
import { Container } from 'components/common';
import { Wrapper, Thumbnail } from './styles';
import logo from 'assets/illustrations/logo.svg';

export const GenericIntro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <ArrowOnlyHeader/>
      <Wrapper as={Container}>
        <Thumbnail theme={theme}>
          <img src={logo} alt="plöt logo"/>
        </Thumbnail>
      </Wrapper>
    </div>
  );
};
