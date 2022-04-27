import React, {ReactElement, useState} from 'react';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import ReactPlayer from 'react-player/lazy';
import useMeasure from 'react-use-measure';
import {LDObject} from '../../utils/fetch-object';
import {theme} from '../../app/styles/theme';
import {SectionComponent} from '../../components/section/section.component';
import {
  SectionTitleComponent,
} from '../../components/section-title/section-title.component';
import {
  Banner,
  BannerImage,
  BannerText,
  ObjectDescription,
  VimeoContainer,
} from './object.styles';
import France from '../../../public/icons/france.png';
import Saw from '../../../public/icons/saw.png';
import {FormComponent} from '../../components/form/form.component';
import {CarouselModule} from '../../modules/carousel/carousel.module';
import {getObjectFullName} from '../../utils/get-object-full-name';

interface ObjectLayoutProps {
  object: LDObject;
}

export function ObjectLayout({object}: ObjectLayoutProps): ReactElement {
  const [color] = useState(theme[object.color] ?? theme.black);
  const [ref, bounds] = useMeasure();

  return (
    <>
      <SectionComponent backgroundColor={theme.salmonLight}>
        <SectionTitleComponent color={color} paddingLeft>
          {getObjectFullName(object)}
        </SectionTitleComponent>

        {object.imagesCollection.items.length !== 0 && (
          <div ref={ref}>
            <CarouselModule
              images={object.imagesCollection.items}
              badge={object.badge?.url}
            />
          </div>
        )}

        {object?.vimeo && (
          <VimeoContainer width={bounds.width} height={bounds.height}>
            <ReactPlayer
              url={object.vimeo}
              width={bounds.width}
              height={bounds.height}
              playing
              loop
              controls={false}
              volume={0}
              fallback={<>buildImagePlaceholder(bounds.width, bounds.height)</>}
            />
          </VimeoContainer>
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
