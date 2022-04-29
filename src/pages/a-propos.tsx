import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import useMeasure from 'react-use-measure';
import {SectionComponent} from '../components/section/section.component';
import {
  Container,
  ImageContainer,
  StyledMarkdownContainer,
  TextContainer,
} from '../pages-styles/a-propos.styles';
import {fetchSection, LDSection} from '../utils/fetch-section';
import {REVALIDATE} from '../constants';
import {MetaComponent} from '../components/meta/meta.component';
import {DefaultLayout} from '../layouts/default/default.layout';

interface AProposProps {
  about: LDSection;
}

export default function APropos({about}: AProposProps): ReactElement {
  const [ref, bounds] = useMeasure();

  return (
    <>

      <MetaComponent description="A Propos" />

      <DefaultLayout customMeta>

        <SectionComponent>

          <Container
            ref={ref}
            width={bounds.width}
            right={bounds.right}
          >

            <ImageContainer>
              <Image
                src={about.image.url}
                alt="portrait"
                layout="responsive"
                width="100%"
                height="100%"
                placeholder="blur"
                blurDataURL={about.image.base64}
              />
            </ImageContainer>

            {bounds.width !== 0 && bounds.right !== 0 && (
              <TextContainer
                width={bounds.width}
                right={bounds.right}
              >
                <StyledMarkdownContainer>
                  <h2>{about.title}</h2>
                  {documentToReactComponents(about.body.json)}
                </StyledMarkdownContainer>
              </TextContainer>
            )}

          </Container>

        </SectionComponent>

      </DefaultLayout>
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<AProposProps>> {
  const about = await fetchSection('about');

  return {
    props: {
      about,
    },
    revalidate: REVALIDATE,
  };
}
