import React, {ReactElement} from 'react';
import {SectionComponent} from '../components/section/section.component';
import {TitleComponent} from '../components/title/title.component';

export default function NotFound(): ReactElement {
  return (
    <>
      <SectionComponent>
        <TitleComponent align="center">
          Page non trouvée
        </TitleComponent>
      </SectionComponent>
    </>
  );
}
