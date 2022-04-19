import React, {ReactElement} from 'react';
import {SectionComponent} from '../components/section/section.component';
import {
  AlignKeys,
  SectionTitleComponent,
} from '../components/section-title/section-title.component';

export default function Poesie(): ReactElement {
  return (
    <>
      <SectionComponent>
        <SectionTitleComponent align={AlignKeys.center}>
          Page en cours de construction
        </SectionTitleComponent>
      </SectionComponent>
    </>
  );
}
