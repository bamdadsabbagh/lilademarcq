import React, {ReactElement} from 'react';
import {SectionComponent} from '../../components/section/section.component';
import {
  SectionTitleComponent,
} from '../../components/section-title/section-title.component';
import {GridComponent} from './components/grid/grid.component';
import {TileComponent} from './components/tile/tile.component';
import {capitalizeFirstLetter} from '../../utils/capitalize-first-letter';

export interface ObjectTile {
  slug: string;
  position: number;
  name: string;
  description: string;
  thumbnail: {
    url: string;
  };
}

interface ObjectsModuleProps {
  objects: ObjectTile[];
}

export function ObjectsModule({objects}: ObjectsModuleProps): ReactElement {
  return (
    <>
      <SectionComponent>
        <SectionTitleComponent>
          Objets design
        </SectionTitleComponent>
        <GridComponent>
          {objects.map((object) => (
            <TileComponent
              key={object.slug}
              image={object.thumbnail.url}
              title={object.name.toUpperCase()}
              description={capitalizeFirstLetter(object.description.toLowerCase())}
              href={`/objets/${object.slug}`}
            />
          ))}
        </GridComponent>
      </SectionComponent>
    </>
  );
}
