import React, { useContext } from 'react';
import { SidePageLayout, SEO } from 'components/common';
import { GenericIntro } from 'components/landing';
import { ThemeContext } from 'providers/ThemeProvider';
import styled from "styled-components";

const Center = styled.div`
  text-align: center;
`;

export default () => {

  const { theme } = useContext(ThemeContext);

  return (
  <SidePageLayout>
    <SEO title="404: Not found" location="/404" />
    <GenericIntro/>
    <Center>
      <h1>404: not found</h1>
      <p><b>this page does not exist.</b></p>
      <br/>
    </Center>
  </SidePageLayout>
);
};
