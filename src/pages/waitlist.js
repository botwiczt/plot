import React from 'react';
import { SidePageLayout, SEO } from 'components/common';
import { GenericIntro, WaitlistSkills } from 'components/landing';

export default () => (
  <SidePageLayout>
    <SEO/>
    <GenericIntro/>
    <WaitlistSkills/>
  </SidePageLayout>
);
