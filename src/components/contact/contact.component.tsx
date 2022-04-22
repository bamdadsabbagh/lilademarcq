import React, {ReactElement} from 'react';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {Container, Image, TextContainer, Wrapper} from './contact.styles';
import {LDSection} from '../../utils/fetch-section';

export interface ContactComponentProps {
  contact: LDSection;
}

export function ContactComponent({contact}: ContactComponentProps): ReactElement {
  return (
    <Wrapper>
      <Container>
        <Image
          alt="contact"
          src={contact.image.url}
          // placeholder="blur"
          objectFit="contain"
          width={640 * 0.8}
          height={480 * 0.8}
        />
        <TextContainer>
          {documentToReactComponents(contact.body.json)}
        </TextContainer>
      </Container>
    </Wrapper>
  );
}
