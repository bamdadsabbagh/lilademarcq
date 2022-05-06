import React, {ReactElement} from 'react';
import {SectionComponent} from '../../components/section/section.component';
import {TitleComponent} from '../../components/title/title.component';
import {capitalizeFirstLetter} from '../../utils/capitalize-first-letter';
import {GridComponent} from '../../components/grid/grid.component';
import {LDMyObjects} from '../../utils/fetch-my-objects';

interface ObjectsModuleProps {
  myObjects: LDMyObjects;
  noPaddingTop?: boolean;
}

export function ObjectsModule({
  myObjects,
  noPaddingTop,
}: ObjectsModuleProps): ReactElement {
  return (
    <>
      <SectionComponent isSmallTop={noPaddingTop}>

        <TitleComponent>
          Objets design
        </TitleComponent>

        <GridComponent
          tiles={myObjects.objectsCollection.items.map((object) => ({
            image: {
              src: object.thumbnail.url,
              blur: object.thumbnail.base64,
            },
            href: `/objets/${object.slug}`,
            h3: object.name.toUpperCase(),
            span: capitalizeFirstLetter(object.description.toLowerCase()),
          }))}
        />

      </SectionComponent>
    </>
  );
}
