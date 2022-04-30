import React, {ReactElement} from 'react';
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
import {LDObject} from '../../utils/fetch-object';

interface ObjectsModuleProps {
  objects: LDObject[];
}

export function ObjectsModule({objects}: ObjectsModuleProps): ReactElement {
  return (
    <>
      <SectionComponent>

        <TitleComponent>
          Objets design
        </TitleComponent>

        <GridContainer>
          <GridBody>
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
                  <HoverBox>
                    <h3>{object.name.toUpperCase()}</h3>
                    <span>{capitalizeFirstLetter(object.description.toLowerCase())}</span>
                  </HoverBox>
                </Tile>
              </LinkComponent>
            ))}
          </GridBody>
        </GridContainer>

      </SectionComponent>
    </>
  );
}
