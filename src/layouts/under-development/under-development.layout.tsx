import React, {ReactElement} from 'react';
import {SectionComponent} from '../../components/section/section.component';
import {
  AlignKeys,
  TitleComponent,
} from '../../components/title/title.component';
import {MetaComponent} from '../../components/meta/meta.component';
import {DefaultLayout} from '../default/default.layout';

export function UnderDevelopmentLayout(): ReactElement {
  return (
    <>
      <MetaComponent description="Page en cours de construction" />
      <DefaultLayout customMeta>
        <SectionComponent>
          <TitleComponent align={AlignKeys.center}>
            Page en cours de construction
          </TitleComponent>
        </SectionComponent>
      </DefaultLayout>
    </>
  );
}
