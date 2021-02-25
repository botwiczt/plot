import React from 'react';
import { SidePageLayout, SEO } from 'components/common';
import { PrivacyIntro, PrivacySkills, Contact, Projects } from 'components/landing';

export default () => (
  <SidePageLayout>
    <SEO />
    <PrivacyIntro />
    <PrivacySkills />
  </SidePageLayout>
);
