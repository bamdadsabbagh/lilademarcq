import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {SectionComponent} from '../components/section/section.component';
import Portrait from '../../public/assets/images/portrait.jpg';
import {getHtmlFromMarkdown} from '../utils/get-html-from-markdown';
import {MarkdownComponent} from '../components/markdown/markdown.component';
import {
  ImageTextComponent,
} from '../components/image-text/image-text.component';
import {StyledMarkdownContainer} from '../pages-styles/a-propos.styles';

interface AProposProps {
  html: string;
}

export default function APropos({html}: AProposProps): ReactElement {
  return (
    <>
      <SectionComponent>
        <ImageTextComponent image={Portrait} alt="a">
          <StyledMarkdownContainer>
            <MarkdownComponent content={html} />
          </StyledMarkdownContainer>
        </ImageTextComponent>
      </SectionComponent>
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<AProposProps>> {
  return {
    props: {
      html: await getHtmlFromMarkdown('a-propos'),
    },
  };
}
