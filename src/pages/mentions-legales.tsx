import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {SectionComponent} from '../components/section/section.component';
import {theme} from '../app/styles/theme';
import {getHtmlFromMarkdown} from '../utils/get-html-from-markdown';
import {MarkdownComponent} from '../components/markdown/markdown.component';
import {Markdown, Title} from '../pages-styles/mentions-legales.styles';

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
  return {
    props: {
      html: await getHtmlFromMarkdown('mentions-legales'),
    },
  };
}
