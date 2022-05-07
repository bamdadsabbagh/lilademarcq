import React, {ReactElement} from 'react';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import {SectionComponent} from '../../components/section/section.component';
import {theme} from '../../app/styles/theme';
import {
  AlignKeys,
  TitleComponent,
} from '../../components/title/title.component';
import {LDSection} from '../../utils/fetch-section';
import {Body, ImageContainer, Text} from './about.module.styles';

interface AboutModuleProps {
  title: LDSection['title'];
  image: LDSection['image'];
  body: LDSection['body'];
}

export function AboutModule({
  title,
  image,
  body,
}: AboutModuleProps): ReactElement {
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
              alt={title}
              layout="responsive"
              width="100%"
              height="100%"
              placeholder="blur"
              blurDataURL={image.base64}
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
