import React from 'react';
import { SidePageLayout, SEO } from 'components/common';
import { WaitlistIntro, WaitlistSkills } from 'components/landing';

export default () => (
  <SidePageLayout>
    <SEO />
    <WaitlistIntro />
    <WaitlistSkills />
  </SidePageLayout>
);
