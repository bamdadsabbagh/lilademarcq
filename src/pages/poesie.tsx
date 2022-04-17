import React, {ReactElement} from 'react';
import {SectionComponent} from '../components/section/section.component';
import {
  ContentTitleComponent,
} from '../components/content-title/content-title.component';

export default function Poesie(): ReactElement {
  return (
    <>
      <SectionComponent>
        <ContentTitleComponent align="center">
          Page en cours de construction
        </ContentTitleComponent>
      </SectionComponent>
    </>
  );
}
