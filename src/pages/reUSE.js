import React from 'react';
import { SidePageLayout, SEO } from 'components/common';
import { ReuseIntro, ReuseSkills } from 'components/landing';

export default () => (
  <SidePageLayout>
    <SEO />
    <ReuseIntro />
    <ReuseSkills />
  </SidePageLayout>
);
