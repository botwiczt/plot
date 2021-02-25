import React from 'react';
import { SidePageLayout, SEO } from 'components/common';
import { WaitlistIntro, WaitlistSkills, Contact, Projects } from 'components/landing';

export default () => (
  <SidePageLayout>
    <SEO />
    <WaitlistIntro />
    <WaitlistSkills />
  </SidePageLayout>
);
