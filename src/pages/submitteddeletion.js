import React from 'react';
import { SidePageLayout, SEO } from 'components/common';
import { GenericIntro, SubmittedDeletion } from 'components/landing';

export default () => (
  <SidePageLayout>
    <SEO/>
    <GenericIntro/>
    <SubmittedDeletion/>
  </SidePageLayout>
);
