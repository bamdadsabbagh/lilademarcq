import React, {ReactElement, useState} from 'react';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {SectionComponent} from '../../components/section/section.component';
import {
  AlignKeys,
  TitleComponent,
} from '../../components/title/title.component';
import {theme} from '../../app/styles/theme';
import {Body, TextContainer, TriangleContainer} from './poetry.layout.styles';
import {TriangleComponent} from '../../components/triangle/triangle.component';
import {PoetryInterface} from '../../utils/fetch-poetry';

interface PoetryLayoutProps {
  poetry: PoetryInterface;
}

export function PoetryLayout({poetry}: PoetryLayoutProps): ReactElement {
  const [isHover, setHover] = useState(false);
  const [isExpanded, setExpanded] = useState(false);

  return (
    <>
      <SectionComponent backgroundColor={theme.salmonLight}>
        <TitleComponent align={AlignKeys.center} color={theme.salmonDark}>
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
    </>
  );
}
