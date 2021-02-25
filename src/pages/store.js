import React from 'react';
import { SidePageLayout, SEO } from 'components/common';
import { StoreIntro, StoreSkills, Contact, Projects } from 'components/landing';

export default () => (
  <SidePageLayout>
    <SEO />
    <StoreIntro />
    <StoreSkills />
  </SidePageLayout>
);
