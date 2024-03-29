import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import React, {useState} from 'react';
import {theme} from '../../app/styles/theme';
import {SectionComponent} from '../../components/section/section.component';
import {
  AlignKeys,
  TitleComponent,
} from '../../components/title/title.component';
import {TriangleComponent} from '../../components/triangle/triangle.component';
import {LDMyPoetry} from '../../utils/fetch-my-poetry';
import {
  Body,
  Pictures,
  TextContainer,
  TriangleContainer,
} from './poetry.layout.styles';

interface PoetryLayoutProps {
  poetry: LDMyPoetry;
}

export function PoetryLayout({poetry}: PoetryLayoutProps): JSX.Element {
  const [isHover, setHover] = useState(false);
  const [isExpanded, setExpanded] = useState(false);

  return (
    <>
      <SectionComponent backgroundColor={theme.salmonLight}>
        <TitleComponent
          align={AlignKeys.center}
          color={theme.salmonDark}
          isMain
        >
          {poetry.title}
        </TitleComponent>
        <Body
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => setExpanded((e) => !e)}
        >
          <TextContainer isExpanded={isExpanded}>
            {documentToReactComponents(poetry.body.json)}
          </TextContainer>
          <TriangleContainer>
            <TriangleComponent
              isHover={isHover}
              isBottom={!isExpanded}
              isTop={isExpanded}
              color={theme.black}
            />
          </TriangleContainer>
        </Body>
      </SectionComponent>

      <SectionComponent backgroundColor={theme.white}>
        <Pictures>
          <Image
            src={poetry.illustration.url}
            alt={poetry.illustration.description}
            width={poetry.illustration.width}
            height={poetry.illustration.height}
            blurDataURL={poetry.illustration.base64}
            placeholder="blur"
            layout="responsive"
          />
          <Image
            src={poetry.poem.url}
            alt={poetry.poem.description}
            width={poetry.poem.width}
            height={poetry.poem.height}
            blurDataURL={poetry.poem.base64}
            placeholder="blur"
            layout="responsive"
          />
        </Pictures>
      </SectionComponent>
    </>
  );
}
