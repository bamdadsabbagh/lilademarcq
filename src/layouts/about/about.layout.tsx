import React, {ReactElement} from 'react';
import Image from 'next/image';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {SectionComponent} from '../../components/section/section.component';
import {
  Container,
  ImageContainer,
  TextContainer,
  TextWrapper,
} from './about.layout.styles';
import {DefaultLayout} from '../default/default.layout';
import {LDSection} from '../../utils/fetch-section';

interface AboutLayoutProps {
  aboutSection: LDSection;
}

export function AboutLayout({
  aboutSection,
}: AboutLayoutProps): ReactElement {
  return (
    <>
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
                <h1>{aboutSection.title}</h1>
                {documentToReactComponents(aboutSection.body.json)}
              </TextWrapper>
            </TextContainer>

          </Container>

        </SectionComponent>

      </DefaultLayout>
    </>
  );
}
