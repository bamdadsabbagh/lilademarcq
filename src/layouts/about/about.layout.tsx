import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import React from 'react';
import {SectionComponent} from '../../components/section/section.component';
import {LDSection} from '../../utils/fetch-section';
import {DefaultLayout} from '../default/default.layout';
import {
  Container,
  ImageContainer,
  TextContainer,
  TextWrapper,
} from './about.layout.styles';

interface AboutLayoutProps {
  aboutSection: LDSection;
}

export function AboutLayout({aboutSection}: AboutLayoutProps): JSX.Element {
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
