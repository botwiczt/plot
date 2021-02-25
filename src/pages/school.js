import React from 'react';
import { SidePageLayout, SEO } from 'components/common';
import { SchoolIntro, SchoolSkills, Contact, Projects } from 'components/landing';

export default () => (
  <SidePageLayout>
    <SEO />
    <SchoolIntro />
    <SchoolSkills />
  </SidePageLayout>
);
