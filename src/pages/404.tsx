import React from 'react';
import {SectionComponent} from '../components/section/section.component';
import {AlignKeys, TitleComponent} from '../components/title/title.component';
import {DefaultLayout} from '../layouts/default/default.layout';

export default function NotFound(): JSX.Element {
  return (
    <>
      <DefaultLayout>
        <SectionComponent>
          <TitleComponent align={AlignKeys.center}>
            Page non trouvée
          </TitleComponent>
        </SectionComponent>
      </DefaultLayout>
    </>
  );
}
