import React from 'react';
import { SidePageLayout, SEO } from 'components/common';
import { HomeIntro, HomeSkills, Contact, Projects } from 'components/landing';

export default () => (
  <SidePageLayout>
    <SEO />
    <HomeIntro />
    <HomeSkills />
  </SidePageLayout>
);
