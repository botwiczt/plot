import React from 'react';
import { SidePageLayout, SEO } from 'components/common';
import { WaitlistIntro, SubmittedSkills, Projects } from 'components/landing';

export default () => (
  <SidePageLayout>
    <SEO />
    <WaitlistIntro />
    <SubmittedSkills />
  </SidePageLayout>
);
