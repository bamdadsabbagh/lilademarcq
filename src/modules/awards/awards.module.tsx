import React, {ReactElement, useState} from 'react';
import Image from 'next/image';
import styled, {css} from 'styled-components';
import {theme} from '../../app/styles/theme';
import {SectionComponent} from '../../components/section/section.component';
import {
  ContentTitleComponent,
} from '../../components/content-title/content-title.component';
import AwardADesign from '../../../public/assets/images/award-a-design.png';
import AwardHouzz from '../../../public/assets/images/award-houzz.jpg';
import {TriangleComponent} from '../../components/triangle/triangle.component';
import {fontSpectral} from '../../app/styles/fonts';
import {tf, to} from '../../app/styles/timers';

interface CommonProps {
  gap: number;
}

const common = css<CommonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: ${({gap}) => gap}px;
`;

const Images = styled.div<CommonProps>`
  ${common};
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const Texts = styled.div<CommonProps & {visible: boolean;}>`
  ${common};
  overflow: hidden;

  max-height: ${({visible}) => visible ? '1000px' : 0};

  transition: max-height calc((0.1s + ${to}s) * ${tf}) ease;
`;

const Text = styled.p`
  ${fontSpectral};
  font-size: 1.6em;
  line-height: 1.2em;

  text-align: center;
  width: 100%;
  padding: 0 4em;

  margin-top: 1em;

  i {
    font-style: italic;
  }
`;

const Expand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 3em;
`;

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
      <Expand>
        <TriangleComponent
          color={theme.green}
          isBottom={!open}
          isTop={open}
          onClick={() => setOpen((o) => !o)}
        />
      </Expand>
    </SectionComponent>
  );
}
