import React, {ReactElement} from 'react';
import Image from 'next/image';
import {SectionComponent} from '../../components/section/section.component';
import {theme} from '../../app/styles/theme';
import France from '../../../public/assets/icons/france.png';
import Saw from '../../../public/assets/icons/saw.png';
import {FormComponent} from '../../components/form/form.component';
import {
  SectionTitleComponent,
} from '../../components/section-title/section-title.component';
import {MarkdownComponent} from '../../components/markdown/markdown.component';
import {Container, MadeIn, MarkdownContainer} from './product.styles';
import {
  CarouselComponent,
  CarouselImage,
} from '../../components/carousel/carousel.component';
import {ModalComponent} from '../../components/modal/modal.component';

export interface ProductLayoutProps {
  data: {
    slug: string;
    name: string;
    description: string;
    structure: string;
    structureDetails: string;
    color: string;
  };
  content: string;
  images: CarouselImage[];
  color?: string;
}

const defaultProps = {
  color: theme.black,
};

export function ProductLayout({
  data,
  content,
  images,
  color = defaultProps.color,
}: ProductLayoutProps): ReactElement {
  return (
    <>
      <ModalComponent />

      <SectionComponent backgroundColor={theme.salmonLight} verticalPadding={3}>
        <SectionTitleComponent color={color} bottomPadding={0.6}>
          {`${data.name.toUpperCase()}, ${data.description}`}
        </SectionTitleComponent>

        {images.length !== 0 && (
          <CarouselComponent images={images} />
        )}
      </SectionComponent>

      <SectionComponent>
        <MarkdownContainer>
          <MarkdownComponent content={content} />
        </MarkdownContainer>
      </SectionComponent>

      <SectionComponent backgroundColor={theme.salmonLight}>
        <Container>
          <span />
          <Image
            alt="Loire"
            src={France}
            placeholder="blur"
            layout="intrinsic"
            objectFit="contain"
          />
          <MadeIn>
            <p>
              <b>Made in Loire</b>
              (France)
            </p>
          </MadeIn>
        </Container>
      </SectionComponent>

      <SectionComponent backgroundColor={theme.white}>
        <Container>
          <span />
          <Image
            alt="Saw"
            src={Saw}
            placeholder="blur"
            layout="intrinsic"
            objectFit="contain"
          />
          <MadeIn>
            <p>
              <b>{data.structure}</b>
            </p>
            <p>
              <small>{data.structureDetails}</small>
            </p>
          </MadeIn>
        </Container>
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
