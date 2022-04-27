import React, {ReactElement} from 'react';
import useMeasure from 'react-use-measure';
import Image from 'next/image';
import {SectionComponent} from '../../components/section/section.component';
import {
  SectionTitleComponent,
} from '../../components/section-title/section-title.component';
import {LinkComponent} from '../../components/link/link.component';
import {capitalizeFirstLetter} from '../../utils/capitalize-first-letter';
import {GridBody, GridContainer, HoverBox, Tile} from './object.styles';

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
  const [gridRef, gridBounds] = useMeasure();
  const [tileRef, tileBounds] = useMeasure();

  return (
    <>
      <SectionComponent>
        <SectionTitleComponent>
          Objets design
        </SectionTitleComponent>
        <GridContainer ref={gridRef}>
          <GridBody>
            {objects.map((object) => (
              <div key={object.slug}>
                <LinkComponent href={`/objets/${object.slug}`}>
                  <Tile ref={tileRef}>
                    <Image
                      src={object.thumbnail.url}
                      width={gridBounds.width * 0.5}
                      height={gridBounds.width * 0.5}
                      objectFit="cover"
                    />
                    <HoverBox size={tileBounds.width}>
                      <h3>{object.name.toUpperCase()}</h3>
                      <span>{capitalizeFirstLetter(object.description.toLowerCase())}</span>
                    </HoverBox>
                  </Tile>
                </LinkComponent>
              </div>
            ))}
          </GridBody>
        </GridContainer>
      </SectionComponent>
    </>
  );
}
