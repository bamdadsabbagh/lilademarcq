import React, {ReactElement, useState} from 'react';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import useMeasure from 'react-use-measure';
import {LDObject} from '../../utils/fetch-object';
import {theme} from '../../app/styles/theme';
import {SectionComponent} from '../../components/section/section.component';
import {TitleComponent} from '../../components/title/title.component';
import {
  BannerImage,
  BannerItem,
  Banners,
  BannerText,
  ObjectDescription,
} from './object.layout.styles';
import {FormModule} from '../../modules/form/form.module';
import {getObjectFullName} from '../../utils/get-object-full-name';
import {FormInterface} from '../../utils/fetch-form';
import {VideoComponent} from '../../components/video/video.component';
import {CarouselComponent} from '../../components/carousel/carousel.component';
import France from '../../../public/icons/france.png';
import Saw from '../../../public/icons/saw.png';

interface ObjectLayoutProps {
  object: LDObject;
  form: FormInterface;
}

export function ObjectLayout({
  object,
  form,
}: ObjectLayoutProps): ReactElement {
  const [color] = useState(theme[object.color] ?? theme.black);
  const [ref, bounds] = useMeasure();

  return (
    <>
      <SectionComponent
        backgroundColor={theme.salmonLight}
      >

        <TitleComponent color={color} paddingLeft>
          {getObjectFullName(object)}
        </TitleComponent>

        <div ref={ref}>
          <CarouselComponent
            isLightbox
            height={bounds.width * 0.5625}
            badge={object.badge}
            slides={object.imagesCollection.items.map((image) => ({
              src: image.url,
              base64: image.base64,
              alt: image.description,
              width: image.width,
              height: image.height,
            }))}
          />
        </div>

        {object?.vimeo && (
          <VideoComponent
            url={object.vimeo}
            width={bounds.width}
            height={bounds.height}
          />
        )}

      </SectionComponent>

      <SectionComponent>
        <ObjectDescription>
          {documentToReactComponents(object.body.json)}
        </ObjectDescription>
      </SectionComponent>

      <SectionComponent backgroundColor={theme.salmonLight}>
        <Banners>
          <BannerItem>
            <BannerImage>
              <Image
                src={France}
                alt=""
                placeholder="blur"
              />
            </BannerImage>
            <BannerText>
              {object.madeIn}
            </BannerText>
          </BannerItem>
          <BannerItem>
            <BannerImage>
              <Image
                src={Saw}
                alt=""
                placeholder="blur"
              />
            </BannerImage>
            <BannerText>
              <b>{object.structure}</b>
              <small>
                {object.structureDetails.toLowerCase()}
              </small>
            </BannerText>
          </BannerItem>
        </Banners>
      </SectionComponent>

      <FormModule
        form={form}
        text={object.formTitle}
        backgroundColor={color}
      />
    </>
  );
}
