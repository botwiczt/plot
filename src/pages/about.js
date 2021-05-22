import React from 'react';
import { SidePageLayout, SEO } from 'components/common';
import { AboutIntro, AboutSkills } from 'components/landing';

export default () => (
  <SidePageLayout>
    <SEO/>
    <AboutIntro/>
    <AboutSkills/>
  </SidePageLayout>
);
