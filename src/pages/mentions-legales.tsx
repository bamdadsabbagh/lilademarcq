import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {SectionComponent} from '../components/section/section.component';
import {theme} from '../app/styles/theme';
import {getHtmlFromMarkdown} from '../utils/get-html-from-markdown';
import {Title} from '../pages-styles/cgv.styles';
import {MarkdownComponent} from '../components/markdown/markdown.component';

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
        <MarkdownComponent content={html} />
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
