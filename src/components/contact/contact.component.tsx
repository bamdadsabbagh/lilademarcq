import React, {ReactElement} from 'react';
import ContactImage from '../../../public/images/contact.jpg';
import {Container, Image, TextContainer, Wrapper} from './contact.styles';
import {MarkdownComponent} from '../markdown/markdown.component';

export interface ContactComponentProps {
  content: string;
}

export function ContactComponent({content}: ContactComponentProps): ReactElement {
  return (
    <Wrapper>
      <Container>
        <Image
          alt="contact"
          src={ContactImage}
          placeholder="blur"
          objectFit="contain"
          width={640 * 0.8}
          height={480 * 0.8}
        />
        <TextContainer>
          <MarkdownComponent content={content} />
        </TextContainer>
      </Container>
    </Wrapper>
  );
}
