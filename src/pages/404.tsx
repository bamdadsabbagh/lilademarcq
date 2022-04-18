import React, {ReactElement} from 'react';
import {SectionComponent} from '../components/section/section.component';
import {
  SectionTitleComponent,
} from '../components/section-title/section-title.component';

export default function NotFound(): ReactElement {
  return (
    <>
      <SectionComponent>
        <SectionTitleComponent align="center">
          Page non trouvée
        </SectionTitleComponent>
      </SectionComponent>
    </>
  );
}
