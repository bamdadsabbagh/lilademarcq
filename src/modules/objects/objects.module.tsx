import React from 'react';
import {GridComponent} from '../../components/grid/grid.component';
import {SectionComponent} from '../../components/section/section.component';
import {TitleComponent} from '../../components/title/title.component';
import {capitalizeFirstLetter} from '../../utils/capitalize-first-letter';
import {LDMyObjects} from '../../utils/fetch-my-objects';

interface ObjectsModuleProps {
  myObjects: LDMyObjects;
  noPaddingTop?: boolean;
  isMain?: boolean;
}

export function ObjectsModule({
  myObjects,
  noPaddingTop,
  isMain = false,
}: ObjectsModuleProps): JSX.Element {
  return (
    <>
      <SectionComponent isSmallTop={noPaddingTop}>
        <TitleComponent isMain={isMain}>Objets design</TitleComponent>

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
