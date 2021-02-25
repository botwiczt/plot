import React, { useContext } from 'react';
import { Link } from "gatsby"
import { SidePageLayout, SEO } from 'components/common';
import { ThemeContext } from 'providers/ThemeProvider';
import styled from "styled-components";
import logo from 'assets/illustrations/logo.svg';

const Brand = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  filter: ${({ theme }) => (theme === 'dark' ? 'invert(1)' : 'invert(0)')};
  @media (max-width: 1200px) {
   width: 50%;
  }
`;

const ErrorContent = styled.p`
  text-align: center;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  border-radius: 10px;
  transition: all 0.5s ease;
  background: ${({ theme }) => (theme === 'dark' ? '#FFF' : '#000')};
  color: ${({ theme }) => (theme === 'dark' ? '#000' : '#FFF')};

  :hover {
    box-shadow: inset 0 0 100px 100px #444d56;
    transform: scale(1.15);
  }
  @media only screen and (max-width: 672px) {
      border-radius: 3px;
    }
`;

export default () => {

  const { theme } = useContext(ThemeContext);

  return (
  <SidePageLayout>
    <SEO title="404: Not found" location="/404" />
    <Brand as={Link} to="/" theme={theme}>
      <img src={logo} alt="company logo" />
    </Brand>
    <ErrorContent>
    <h1>404: not found</h1>
    <p>this page does not exist.</p>
    <Link to="/"><Button theme={theme}>return home</Button></Link>
    </ErrorContent>
  </SidePageLayout>
);
};
