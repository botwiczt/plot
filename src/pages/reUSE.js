import React from 'react';
import { SidePageLayout, SEO } from 'components/common';
import { ValuesIntro, ValuesSkills, Projects } from 'components/landing';

export default () => (
  <SidePageLayout>
    <SEO />
    <ValuesIntro />
    <ValuesSkills />
  </SidePageLayout>
);
