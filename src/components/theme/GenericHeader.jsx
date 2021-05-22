import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import { Wrapper, ArrowWrapper, NavButton } from './SubBrandStyles';
import logo from 'assets/illustrations/logo.svg';
import leftarrow from 'assets/illustrations/leftarrow.svg';
import styled from 'styled-components';

const Brand = styled.img`
  position: absolute;
  width: 25%;
  margin-left: auto;
  margin-right: auto;
  margin-top: -4px;
  left: 0;
  right: 0;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  @media (max-width: 960px) {
    width: 30%;
  }
`;

export const GenericHeader = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <ArrowWrapper>
        <Link to="/">
          <NavButton theme={theme} src={leftarrow}/>
        </Link>
      </ArrowWrapper>
      <Brand theme={theme} src={logo} alt="plöt logo"/>
    </Wrapper>
  );
};
