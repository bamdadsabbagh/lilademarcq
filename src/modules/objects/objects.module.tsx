import React, {ReactElement} from 'react';
import useMeasure from 'react-use-measure';
import Image from 'next/image';
import {SectionComponent} from '../../components/section/section.component';
import {TitleComponent} from '../../components/title/title.component';
import {LinkComponent} from '../../components/link/link.component';
import {capitalizeFirstLetter} from '../../utils/capitalize-first-letter';
import {
  GridBody,
  GridContainer,
  HoverBox,
  ImageContainer,
  Tile,
} from './object.styles';

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
        <TitleComponent>
          Objets design
        </TitleComponent>
        <GridContainer ref={gridRef}>
          <GridBody>
            {objects.map((object) => (
              <div key={object.slug}>
                <LinkComponent href={`/objets/${object.slug}`}>
                  <Tile ref={tileRef} size={gridBounds.width * 0.2}>
                    <ImageContainer>
                      <Image
                        src={object.thumbnail.url}
                        alt={object.name}
                        layout="responsive"
                        width="100%"
                        height="100%"
                      />
                    </ImageContainer>
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
