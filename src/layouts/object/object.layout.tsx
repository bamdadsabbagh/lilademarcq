import React, {ReactElement, useState} from 'react';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import ReactPlayer from 'react-player/lazy';
import useMeasure from 'react-use-measure';
import {LDObject} from '../../utils/fetch-object';
import {theme} from '../../app/styles/theme';
import {SectionComponent} from '../../components/section/section.component';
import {TitleComponent} from '../../components/title/title.component';
import {
  Banner,
  BannerImage,
  BannerText,
  ObjectDescription,
  VimeoContainer,
} from './object.styles';
import France from '../../../public/icons/france.png';
import Saw from '../../../public/icons/saw.png';
import {FormModule} from '../../modules/form/form.module';
import {CarouselModule} from '../../modules/carousel/carousel.module';
import {getObjectFullName} from '../../utils/get-object-full-name';
import {buildSvgPlaceholder} from '../../utils/build-svg-placeholder';

interface ObjectLayoutProps {
  object: LDObject;
}

export function ObjectLayout({object}: ObjectLayoutProps): ReactElement {
  const [color] = useState(theme[object.color] ?? theme.black);
  const [ref, bounds] = useMeasure();

  return (
    <>
      <SectionComponent backgroundColor={theme.salmonLight}>

        <TitleComponent color={color} paddingLeft>
          {getObjectFullName(object)}
        </TitleComponent>

        {object.imagesCollection.items.length !== 0 && (
          <div ref={ref}>
            <CarouselModule
              images={object.imagesCollection.items}
              badge={object.badge}
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
              fallback={<>{buildSvgPlaceholder(bounds.width, bounds.height)}</>}
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
              src={France}
              alt=""
              placeholder="blur"
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
              src={Saw}
              alt=""
              placeholder="blur"
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
        <FormModule
          text={object.formTitle}
          backgroundColor={color}
        />
      </SectionComponent>
    </>
  );
}
