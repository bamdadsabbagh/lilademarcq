import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {SectionComponent} from '../components/section/section.component';
import {theme} from '../app/styles/theme';
import {getMarkdown} from '../utils/get-markdown';
import {MarkdownComponent} from '../components/markdown/markdown.component';
import {Markdown, Title} from '../pages-styles/mentions-legales.styles';
import {convertMarkdownToHtml} from '../utils/convert-markdown-to-html';

interface MentionsLegalesProps {
  html: string;
}

export default function MentionsLegales({html}: MentionsLegalesProps): ReactElement {
  return (
    <SectionComponent backgroundColor={theme.salmonLight}>
      <>
        <Title>
          Mentions Légales
        </Title>
        <Markdown>
          <MarkdownComponent content={html} />
        </Markdown>
      </>
    </SectionComponent>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<MentionsLegalesProps>> {
  const markdown = getMarkdown('mentions-legales');
  const html = await convertMarkdownToHtml(markdown);

  return {
    props: {
      html,
    },
  };
}
