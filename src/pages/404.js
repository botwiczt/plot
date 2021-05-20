import React, { useContext } from 'react';
import { Link } from "gatsby"
import { SidePageLayout, SEO, Button } from 'components/common';
import { ThemeContext } from 'providers/ThemeProvider';
import styled from "styled-components";
import logo from 'assets/illustrations/logo.svg';

const Center = styled.div`
  text-align: center;
`;

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

export default () => {

  const { theme } = useContext(ThemeContext);

  return (
  <SidePageLayout>
    <SEO title="404: Not found" location="/404" />
    <Brand as={Link} to="/" theme={theme}>
      <img src={logo} alt="company logo" />
    </Brand><br/>
    <Center>
    <h1>404: not found</h1>
    <p>this page does not exist.</p>
    <br/>
    <Link to="/">
    <Button theme={theme}>return home →</Button></Link>
    </Center>
  </SidePageLayout>
);
};
