import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {SectionComponent} from '../components/section/section.component';
import {theme} from '../app/styles/theme';
import {getMarkdown} from '../utils/get-markdown';
import {Markdown, Title} from '../pages-styles/cgv.styles';
import {MarkdownComponent} from '../components/markdown/markdown.component';
import {convertMarkdownToHtml} from '../utils/convert-markdown-to-html';

interface CgvProps {
  html: string;
}

export default function Cgv({html}: CgvProps): ReactElement {
  return (
    <SectionComponent backgroundColor={theme.salmonLight}>
      <>
        <Title>
          Conditions Générales de Vente
        </Title>
        <Markdown>
          <MarkdownComponent content={html} />
        </Markdown>
      </>
    </SectionComponent>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<CgvProps>> {
  const markdown = getMarkdown('cgv');
  const html = await convertMarkdownToHtml(markdown);

  return {
    props: {
      html,
    },
  };
}
