import React, {ReactElement, useState} from 'react';
import Image from 'next/image';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {theme} from '../../app/styles/theme';
import {SectionComponent} from '../../components/section/section.component';
import {
  AlignKeys,
  SectionTitleComponent,
} from '../../components/section-title/section-title.component';
import {TriangleComponent} from '../../components/triangle/triangle.component';
import {
  ButtonContainer,
  Container,
  ImageContainer,
  Images,
  TextContainer,
  Texts,
} from './awards.styles';
import {LDAward} from '../../utils/fetch-awards';

export interface AwardsModuleProps {
  awards: LDAward[];
}

export function AwardsModule({
  awards,
}: AwardsModuleProps): ReactElement {
  const [size] = useState(250);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <SectionComponent backgroundColor={theme.salmonLight} verticalPadding={4}>
      <SectionTitleComponent align={AlignKeys.left}>
        Mes distinctions
      </SectionTitleComponent>

      <Container
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >

        <Images gap={size / 4}>
          <ImageContainer>
            <Image
              src={awards[0].image.url}
              alt={awards[0].slug}
              layout="intrinsic"
              width={size}
              height={size}
            />
          </ImageContainer>
          <ImageContainer>
            <Image
              src={awards[1].image.url}
              alt={awards[1].slug}
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
            {documentToReactComponents(awards[0].body.json)}
          </TextContainer>
          <TextContainer>
            {documentToReactComponents(awards[1].body.json)}
          </TextContainer>
        </Texts>

        <ButtonContainer>
          <TriangleComponent
            color={theme.green}
            isBottom={!open}
            isTop={open}
            isHover={hover}
          />
        </ButtonContainer>

      </Container>
    </SectionComponent>
  );
}
