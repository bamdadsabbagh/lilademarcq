import React, {ReactElement, useState} from 'react';
import Image from 'next/image';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {SectionComponent} from '../../components/section/section.component';
import {theme} from '../../app/styles/theme';
import France from '../../../public/icons/france.png';
import Saw from '../../../public/icons/saw.png';
import {FormComponent} from '../../components/form/form.component';
import {
  SectionTitleComponent,
} from '../../components/section-title/section-title.component';
import {
  Banner,
  BannerImage,
  BannerText,
  ObjectDescription,
} from './object.styles';
import {CarouselComponent} from '../../components/carousel/carousel.component';
import {ModalComponent} from '../../components/modal/modal.component';
import {LDObject} from '../../utils/fetch-object';

export interface ProductLayoutProps {
  object: LDObject;
}

export function ObjectLayout({
  object,
}: ProductLayoutProps): ReactElement {
  const [color] = useState(theme[object.color] ?? theme.black);
  const [images] = useState(object.imagesCollection.items);

  return (
    <>
      <ModalComponent />

      <SectionComponent backgroundColor={theme.salmonLight}>
        <SectionTitleComponent color={color}>
          {`${object.name.toUpperCase()}, ${object.description}`}
        </SectionTitleComponent>

        {images.length !== 0 && (
          <CarouselComponent images={images} />
        )}
      </SectionComponent>

      <SectionComponent>
        <ObjectDescription>
          {documentToReactComponents(object.body.json)}
        </ObjectDescription>
      </SectionComponent>

      <SectionComponent backgroundColor={theme.salmonLight}>
        <Banner>
          <BannerImage>
            <Image
              alt="Loire"
              src={France}
              placeholder="blur"
              layout="intrinsic"
              objectFit="contain"
            />
          </BannerImage>
          <BannerText>
            <p>
              <b>Made in Loire</b>
              (France)
            </p>
          </BannerText>
        </Banner>
      </SectionComponent>

      <SectionComponent backgroundColor={theme.white}>
        <Banner>
          <BannerImage>
            <Image
              alt="Saw"
              src={Saw}
              placeholder="blur"
              layout="intrinsic"
              objectFit="contain"
            />
          </BannerImage>
          <BannerText>
            <p>
              <b>{object.structure}</b>
            </p>
            <span>
              {object.structureDetails.toLowerCase()}
            </span>
          </BannerText>
        </Banner>
      </SectionComponent>

      <SectionComponent backgroundColor={color}>
        <FormComponent
          text="Demandez votre devis ou votre nuancier"
          backgroundColor={color}
        />
      </SectionComponent>
    </>
  );
}
