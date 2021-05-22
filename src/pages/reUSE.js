import React from 'react';
import { SidePageLayout, SEO } from 'components/common';
import { GenericIntro, Reuse } from 'components/landing';

export default () => (
  <SidePageLayout>
    <SEO/>
    <GenericIntro/>
    <Reuse/>
  </SidePageLayout>
);
