import React from 'react';
import { SidePageLayout, SEO } from 'components/common';
import { GenericIntro, ReuseSkills } from 'components/landing';

export default () => (
  <SidePageLayout>
    <SEO/>
    <GenericIntro/>
    <ReuseSkills/>
  </SidePageLayout>
);
