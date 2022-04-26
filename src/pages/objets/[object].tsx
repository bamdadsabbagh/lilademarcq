import React, {ReactElement, useEffect, useState} from 'react';
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import {fetchObjects} from '../../utils/fetch-objects';
import {fetchObject, LDObject} from '../../utils/fetch-object';
import {REVALIDATE} from '../../constants';
import {theme} from '../../app/styles/theme';
import {ModalComponent} from '../../components/modal/modal.component';
import {SectionComponent} from '../../components/section/section.component';
import {
  SectionTitleComponent,
} from '../../components/section-title/section-title.component';
import {CarouselComponent} from '../../components/carousel/carousel.component';
import {
  Banner,
  BannerImage,
  BannerText,
  ObjectDescription,
} from '../../pages-styles/objets/[object].styles';
import France from '../../../public/icons/france.png';
import Saw from '../../../public/icons/saw.png';
import {FormComponent} from '../../components/form/form.component';

export interface ObjectProps {
  object: LDObject;
}

export default function Object({
  object,
}: ObjectProps): ReactElement {
  const [slug, setSlug] = useState(object.slug);
  const [color] = useState(theme[object.color] ?? theme.black);
  const [images] = useState(object.imagesCollection.items);

  useEffect(() => {
    setSlug(object.slug);
  }, [object.slug]);

  return (
    <>
      {object.slug !== slug ? (
        <></>
      ) : (
        <>
          <ModalComponent />

          <SectionComponent backgroundColor={theme.salmonLight}>
            <SectionTitleComponent color={color}>
              {`${object.name.toUpperCase()}, ${object.description}`}
            </SectionTitleComponent>

            {images.length !== 0 && (
              <CarouselComponent images={images} />
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
                <span>
                  {object.structureDetails.toLowerCase()}
                </span>
              </BannerText>
            </Banner>
          </SectionComponent>

          <SectionComponent backgroundColor={color}>
            <FormComponent
              text="Demandez votre devis ou votre nuancier"
              backgroundColor={color}
            />
          </SectionComponent>
        </>
      )}
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<ObjectProps>> {
  const {object: o} = context.params;

  if (Array.isArray(o)) {
    throw new Error('Object name is not defined');
  }

  const object = await fetchObject(o);

  return {
    props: {
      object,
    },
    revalidate: REVALIDATE,
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const objects = await fetchObjects();

  const paths = objects.map((object) => ({
    params: {
      object: object.slug,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}
