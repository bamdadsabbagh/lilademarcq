import React, {ReactElement} from 'react';
import {SectionComponent} from '../../components/section/section.component';
import {
  AlignKeys,
  SectionTitleComponent,
} from '../../components/section-title/section-title.component';
import {MetaComponent} from '../../components/meta/meta.component';

export function UnderDevelopmentLayout(): ReactElement {
  return (
    <>
      <MetaComponent description="Page en cours de construction" />
      <SectionComponent>
        <SectionTitleComponent align={AlignKeys.center}>
          Page en cours de construction
        </SectionTitleComponent>
      </SectionComponent>
    </>
  );
}
