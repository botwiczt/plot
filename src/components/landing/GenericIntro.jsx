import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { ArrowOnlyHeader } from 'components/theme';
import { Container } from 'components/common';
import logo from 'assets/illustrations/logo.svg';
import styled from 'styled-components';

const Thumbnail = styled.div`
  padding-bottom: 1rem;
  transition: all 0.5s ease;
  text-align: center;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  img {
    width: 50%;
  }
`;

export const GenericIntro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <ArrowOnlyHeader/>
      <Thumbnail as={Container} theme={theme}>
        <img src={logo} alt="plöt logo"/>
      </Thumbnail>
    </div>
  );
};
