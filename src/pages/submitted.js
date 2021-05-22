import React from 'react';
import { SidePageLayout, SEO } from 'components/common';
import { GenericIntro, Submitted } from 'components/landing';

export default () => (
  <SidePageLayout>
    <SEO/>
    <GenericIntro/>
    <Submitted/>
  </SidePageLayout>
);
