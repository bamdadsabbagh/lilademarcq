import React, {ReactElement} from 'react';
import {SectionComponent} from '../components/section/section.component';
import {
  AlignKeys,
  SectionTitleComponent,
} from '../components/section-title/section-title.component';
import {MetaComponent} from '../components/meta/meta.component';
import {DefaultLayout} from '../layouts/default/default.layout';

export default function NotFound(): ReactElement {
  return (
    <>
      <MetaComponent description="404" />
      <DefaultLayout customMeta>
        <SectionComponent>
          <SectionTitleComponent align={AlignKeys.center}>
            Page non trouvée
          </SectionTitleComponent>
        </SectionComponent>
      </DefaultLayout>
    </>
  );
}
