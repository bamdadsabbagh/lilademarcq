import React, {ReactElement} from 'react';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import {LDSection} from '../../utils/fetch-section';
import {SectionComponent} from '../../components/section/section.component';
import {theme} from '../../app/styles/theme';
import {
  Container,
  ImageContainer,
  TextContainer,
} from './contact.module.styles';
import {IMAGE_SETTINGS} from '../../constants';

interface ContactModuleProps {
  contact: LDSection;
}

export function ContactModule({contact}: ContactModuleProps): ReactElement {
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
