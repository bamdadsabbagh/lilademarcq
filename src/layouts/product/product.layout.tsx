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
  RichTextContainer,
} from './product.styles';
import {CarouselComponent} from '../../components/carousel/carousel.component';
import {ModalComponent} from '../../components/modal/modal.component';
import {LDObject} from '../../utils/fetch-object';

export interface ProductLayoutProps {
  object: LDObject;
}

export function ProductLayout({
  object,
}: ProductLayoutProps): ReactElement {
  const [color] = useState(theme[object.color] ?? theme.black);
  const [images] = useState(object.imagesCollection.items);

  return (
    <>
      <ModalComponent />

      <SectionComponent backgroundColor={theme.salmonLight} verticalPadding={3}>
        <SectionTitleComponent
          color={color}
          bottomPadding={0.6}
        >
          {`${object.name.toUpperCase()}, ${object.description}`}
        </SectionTitleComponent>

        {images.length !== 0 && (
          <CarouselComponent images={images} />
        )}
      </SectionComponent>

      <SectionComponent>
        <RichTextContainer>
          {documentToReactComponents(object.body.json)}
        </RichTextContainer>
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
            <p>
              <small>{object.structureDetails.toLowerCase()}</small>
            </p>
          </BannerText>
        </Banner>
      </SectionComponent>

      <SectionComponent backgroundColor={color} verticalPadding={4}>
        <FormComponent
          text="Demandez votre devis ou votre nuancier"
          backgroundColor={color}
        />
      </SectionComponent>
    </>
  );
}
