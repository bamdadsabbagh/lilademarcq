import React, {ReactElement} from 'react';
import {SectionComponent} from '../components/section/section.component';
import {
  ContentTitleComponent,
} from '../components/content-title/content-title.component';

export default function NotFound(): ReactElement {
  return (
    <>
      <SectionComponent>
        <ContentTitleComponent align="center">
          Page non trouvée
        </ContentTitleComponent>
      </SectionComponent>
    </>
  );
}
