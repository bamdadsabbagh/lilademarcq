import React, {ReactElement, useState} from 'react';
import Image from 'next/image';
import {theme} from '../../app/styles/theme';
import {SectionComponent} from '../../components/section/section.component';
import {
  ContentTitleComponent,
} from '../../components/content-title/content-title.component';
import AwardADesign from '../../../public/assets/images/award-a-design.png';
import AwardHouzz from '../../../public/assets/images/award-houzz.jpg';
import {TriangleComponent} from '../../components/triangle/triangle.component';
import {
  ButtonContainer,
  ImageContainer,
  Images,
  Text,
  Texts,
} from './awards.styles';

export function AwardsModule(): ReactElement {
  const [size] = useState(400);
  const [open, setOpen] = useState(false);

  return (
    <SectionComponent backgroundColor={theme.salmonLight} verticalPadding={4}>
      <ContentTitleComponent align="left">
        Mes distinctions
      </ContentTitleComponent>
      <Images gap={size / 4}>
        <ImageContainer>
          <Image
            src={AwardADesign}
            alt="A'Design"
            layout="intrinsic"
            width={size}
            height={size}
          />
        </ImageContainer>
        <ImageContainer>
          <Image
            src={AwardHouzz}
            alt="Houzz"
            layout="intrinsic"
            width={size}
            height={size}
          />
        </ImageContainer>
      </Images>
      <Texts
        gap={size / 4}
        visible={open}
      >
        <Text>
          En 2019, je remporte le prix de bronze de l&rsquo;
          <i>A Design Award and Competition</i>
          , reconnu à l&rsquo;international, grâce à mon canapé hybride Isiqu.
        </Text>
        <Text>
          En 2020, je remporte le prix <i>Best of Houzz Service</i>, grâce aux
          expériences positives de mes clients et collaborateurs.
        </Text>
      </Texts>
      <ButtonContainer>
        <TriangleComponent
          color={theme.green}
          isBottom={!open}
          isTop={open}
          onClick={() => setOpen((o) => !o)}
        />
      </ButtonContainer>
    </SectionComponent>
  );
}
