import React from 'react';
import { SidePageLayout, SEO } from 'components/common';
import { StoreIntro, StoreSkills } from 'components/landing';

export default () => (
  <SidePageLayout>
    <SEO/>
    <StoreIntro/>
    <StoreSkills/>
  </SidePageLayout>
);
