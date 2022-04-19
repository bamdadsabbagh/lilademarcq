import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {SectionComponent} from '../components/section/section.component';
import Portrait from '../../public/assets/images/portrait.jpg';
import {getMarkdown} from '../utils/get-markdown';
import {MarkdownComponent} from '../components/markdown/markdown.component';
import {
  ImageTextComponent,
} from '../components/image-text/image-text.component';
import {StyledMarkdownContainer} from '../pages-styles/a-propos.styles';
import {convertMarkdownToHtml} from '../utils/convert-markdown-to-html';

interface AProposProps {
  html: string;
}

export default function APropos({html}: AProposProps): ReactElement {
  return (
    <>
      <SectionComponent>
        <ImageTextComponent image={Portrait} imageAlt="a">
          <StyledMarkdownContainer>
            <MarkdownComponent content={html} />
          </StyledMarkdownContainer>
        </ImageTextComponent>
      </SectionComponent>
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<AProposProps>> {
  const markdown = getMarkdown('a-propos');
  const html = await convertMarkdownToHtml(markdown);

  return {
    props: {html},
  };
}
