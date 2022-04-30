import React, {ReactElement, useEffect, useState} from 'react';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
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
} from './object.styles';
import France from '../../../public/icons/france.png';
import Saw from '../../../public/icons/saw.png';
import {FormModule} from '../../modules/form/form.module';
import {CarouselModule} from '../../modules/carousel/carousel.module';
import {getObjectFullName} from '../../utils/get-object-full-name';
import {FormInterface} from '../../utils/fetch-form';
import {VideoComponent} from '../../components/video/video.component';

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
  const [video, setVideo] = useState(false);

  useEffect(() => {
    if (object?.vimeo) {
      setVideo(true);
    }
  }, [object?.vimeo]);

  return (
    <>
      <SectionComponent
        backgroundColor={theme.salmonLight}
      >

        <TitleComponent color={color} paddingLeft>
          {getObjectFullName(object)}
        </TitleComponent>

        <div ref={ref}>
          <CarouselModule
            images={object.imagesCollection.items}
            badge={object.badge}
          />
        </div>

        {video && (
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
          form={form}
          text={object.formTitle}
          backgroundColor={color}
        />
      </SectionComponent>
    </>
  );
}
