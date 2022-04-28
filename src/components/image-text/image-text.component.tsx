import React, {ReactElement} from 'react';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import {SectionComponent} from '../section/section.component';
import {theme} from '../../app/styles/theme';
import {AlignKeys, TitleComponent} from '../title/title.component';
import {LDSection} from '../../utils/fetch-section';
import {Body, ImageContainer, Text} from './image-text.styles';

interface ImageTextComponentProps {
  title: LDSection['title'];
  image: LDSection['image'];
  body: LDSection['body'];
}

export function ImageTextComponent({
  title,
  image,
  body,
}: ImageTextComponentProps): ReactElement {
  return (
    <>
      <SectionComponent backgroundColor={theme.salmonLight}>

        <TitleComponent align={AlignKeys.center}>
          {title}
        </TitleComponent>

        <Body>
          <span />
          <ImageContainer>
            <Image
              src={image.url}
              layout="responsive"
              width="100%"
              height="100%"
            />
          </ImageContainer>
          <Text>
            {documentToReactComponents(body.json)}
          </Text>
          <span />
        </Body>

      </SectionComponent>
    </>
  );
}
