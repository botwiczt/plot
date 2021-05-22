import React from 'react';
import { SidePageLayout, SEO } from 'components/common';
import { GenericIntro, Waitlist } from 'components/landing';

export default () => (
  <SidePageLayout>
    <SEO/>
    <GenericIntro/>
    <Waitlist/>
  </SidePageLayout>
);
