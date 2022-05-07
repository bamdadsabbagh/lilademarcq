import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import {SectionComponent} from '../components/section/section.component';
import {
  Container,
  ImageContainer,
  TextContainer,
  TextWrapper,
} from '../pages-styles/a-propos.styles';
import {fetchSection, LDSection} from '../utils/fetch-section';
import {REVALIDATE} from '../constants';
import {DefaultLayout} from '../layouts/default/default.layout';
import {FooterComponent} from '../components/footer/footer.component';
import {fetchCatalog, LDCatalog} from '../utils/fetch-catalog';
import {fetchSocials, LDSocial} from '../utils/fetch-socials';
import {SeoComponent} from '../components/seo/seo.component';

interface AProposProps {
  aboutSection: LDSection;
  catalog: LDCatalog;
  socials: LDSocial[];
}

export default function APropos({
  aboutSection,
  catalog,
  socials,
}: AProposProps): ReactElement {
  return (
    <>
      <SeoComponent
        canonical="a-propos"
        title={aboutSection.seoTitle}
        description={aboutSection.seoDescription}
        image={aboutSection.seoImage}
      />

      <DefaultLayout>

        <SectionComponent isSmallTop>

          <Container>

            <ImageContainer>
              <Image
                src={aboutSection.image.url}
                alt="portrait"
                layout="responsive"
                width="100%"
                height="100%"
                placeholder="blur"
                blurDataURL={aboutSection.image.base64}
              />
            </ImageContainer>

            <TextContainer>
              <TextWrapper>
                <h2>{aboutSection.title}</h2>
                {documentToReactComponents(aboutSection.body.json)}
              </TextWrapper>
            </TextContainer>

          </Container>

        </SectionComponent>

      </DefaultLayout>

      <FooterComponent catalog={catalog} socials={socials} />
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<AProposProps>> {
  const aboutSection = await fetchSection('about');
  const catalog = await fetchCatalog();
  const socials = await fetchSocials();

  return {
    props: {
      aboutSection,
      catalog,
      socials,
    },
    revalidate: REVALIDATE,
  };
}
