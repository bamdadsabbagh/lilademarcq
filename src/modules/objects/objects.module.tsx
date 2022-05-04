import React, {ReactElement} from 'react';
import Image from 'next/image';
import {SectionComponent} from '../../components/section/section.component';
import {TitleComponent} from '../../components/title/title.component';
import {LinkComponent} from '../../components/link/link.component';
import {capitalizeFirstLetter} from '../../utils/capitalize-first-letter';
import {ImageContainer, Tile} from './objects.module.styles';
import {LDObject} from '../../utils/fetch-object';
import {GridComponent} from '../../components/grid/grid.component';
import {
  GridTileHoverBoxHalf,
} from '../../components/grid/grid.component.styles';

interface ObjectsModuleProps {
  objects: LDObject[];
  noPaddingTop?: boolean;
}

export function ObjectsModule({
  objects,
  noPaddingTop,
}: ObjectsModuleProps): ReactElement {
  return (
    <>
      <SectionComponent isSmallTop={noPaddingTop}>

        <TitleComponent>
          Objets design
        </TitleComponent>

        <GridComponent>
          {objects.map((object) => (
            <LinkComponent key={object.slug} href={`/objets/${object.slug}`}>
              <Tile>
                <ImageContainer>
                  <Image
                    src={object.thumbnail.url}
                    alt={object.name}
                    layout="responsive"
                    width="100%"
                    height="100%"
                    placeholder="blur"
                    blurDataURL={object.thumbnail.base64}
                  />
                </ImageContainer>
                <GridTileHoverBoxHalf>
                  <h3>{object.name.toUpperCase()}</h3>
                  <span>{capitalizeFirstLetter(object.description.toLowerCase())}</span>
                </GridTileHoverBoxHalf>
              </Tile>
            </LinkComponent>
          ))}
        </GridComponent>

      </SectionComponent>
    </>
  );
}
