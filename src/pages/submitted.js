import React from 'react';
import { SidePageLayout, SEO } from 'components/common';
import { GenericIntro, SubmittedSkills } from 'components/landing';

export default () => (
  <SidePageLayout>
    <SEO/>
    <GenericIntro/>
    <SubmittedSkills/>
  </SidePageLayout>
);
