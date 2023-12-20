import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import React from 'react';
import {theme} from '../../app/styles/theme';
import {SectionComponent} from '../../components/section/section.component';
import {IMAGE_SETTINGS} from '../../constants';
import {LDSection} from '../../utils/fetch-section';
import {
  Container,
  ImageContainer,
  TextContainer,
} from './contact.module.styles';

interface ContactModuleProps {
  contact: LDSection;
}

export function ContactModule({contact}: ContactModuleProps): JSX.Element {
  return (
    <>
      <SectionComponent backgroundColor={theme.salmonLight}>
        <Container>
          <ImageContainer>
            <Image
              src={contact.image.url}
              alt="Contact"
              width={IMAGE_SETTINGS.lowRes}
              height={IMAGE_SETTINGS.lowRes}
              placeholder="blur"
              blurDataURL={contact.image.base64}
            />
          </ImageContainer>
          <TextContainer>
            {documentToReactComponents(contact.body.json)}
          </TextContainer>
        </Container>
      </SectionComponent>
    </>
  );
}
