import React, {ReactElement, useState} from 'react';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import {LDObject} from '../../utils/fetch-object';
import {theme} from '../../app/styles/theme';
import {ModalComponent} from '../../components/modal/modal.component';
import {SectionComponent} from '../../components/section/section.component';
import {
  SectionTitleComponent,
} from '../../components/section-title/section-title.component';
import {CarouselComponent} from '../../components/carousel/carousel.component';
import {
  Banner,
  BannerImage,
  BannerText,
  ObjectDescription,
} from '../../pages-styles/objets/[object].styles';
import France from '../../../public/icons/france.png';
import Saw from '../../../public/icons/saw.png';
import {FormComponent} from '../../components/form/form.component';
import {uncapitalizeFirstLetter} from '../../utils/uncapitalize-first-letter';

interface ObjectLayoutProps {
  object: LDObject;
}

export function ObjectLayout({object}: ObjectLayoutProps): ReactElement {
  const [color] = useState(theme[object.color] ?? theme.black);
  const [images] = useState(object.imagesCollection.items);

  return (
    <>
      <ModalComponent />

      <SectionComponent backgroundColor={theme.salmonLight}>
        <SectionTitleComponent color={color}>
          {`${object.name.toUpperCase()}, ${uncapitalizeFirstLetter(object.description)}`}
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
            <b>{object.madeIn}</b>
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
            <b>
              {object.structure}
            </b>
            <span>
              {object.structureDetails.toLowerCase()}
            </span>
          </BannerText>
        </Banner>
      </SectionComponent>

      <SectionComponent backgroundColor={color}>
        <FormComponent
          text={object.formTitle}
          backgroundColor={color}
        />
      </SectionComponent>
    </>
  );
}
