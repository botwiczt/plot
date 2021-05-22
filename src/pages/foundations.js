import React from 'react';
import { SidePageLayout, SEO } from 'components/common';
import { FoundationIntro, FoundationSkills } from 'components/landing';

export default () => (
  <SidePageLayout>
    <SEO/>
    <FoundationIntro/>
    <FoundationSkills/>
  </SidePageLayout>
);
