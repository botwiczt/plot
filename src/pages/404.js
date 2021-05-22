import React, { useContext } from 'react';
import { SidePageLayout, SEO } from 'components/common';
import { GenericIntro } from 'components/landing';
import { ThemeContext } from 'providers/ThemeProvider';
import styled from "styled-components";

const Center = styled.div`
  text-align: center;
  @media (max-width: 960px) {
    margin-top: 3rem;
  }
`;

export default () => {

  const { theme } = useContext(ThemeContext);

  return (
  <SidePageLayout>
    <SEO title="404: Not found" location="/404" />
    <GenericIntro/>
    <Center>
    <h1>404: not found</h1>
    <p>this page does not exist.</p>
    <br/>
    </Center>
  </SidePageLayout>
);
};
