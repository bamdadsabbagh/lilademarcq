import React, {ReactElement, useState} from 'react';
import Image from 'next/image';
import {theme} from '../../app/styles/theme';
import {SectionComponent} from '../../components/section/section.component';
import {
  AlignKeys,
  SectionTitleComponent,
} from '../../components/section-title/section-title.component';
import AwardADesign from '../../../public/assets/images/award-a-design.png';
import AwardHouzz from '../../../public/assets/images/award-houzz.jpg';
import {TriangleComponent} from '../../components/triangle/triangle.component';
import {
  ButtonContainer,
  ImageContainer,
  Images,
  TextContainer,
  Texts,
} from './awards.styles';
import {MarkdownComponent} from '../../components/markdown/markdown.component';

export interface AwardsModuleProps {
  aDesign: string;
  houzz: string;
}

export function AwardsModule({
  aDesign,
  houzz,
}: AwardsModuleProps): ReactElement {
  const [size] = useState(400);
  const [open, setOpen] = useState(false);

  return (
    <SectionComponent backgroundColor={theme.salmonLight} verticalPadding={4}>
      <SectionTitleComponent align={AlignKeys.left}>
        Mes distinctions
      </SectionTitleComponent>
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
        <TextContainer>
          <MarkdownComponent content={aDesign} />
        </TextContainer>
        <TextContainer>
          <MarkdownComponent content={houzz} />
        </TextContainer>
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
