import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {SectionComponent} from '../components/section/section.component';
import {theme} from '../app/styles/theme';
import {getHtmlFromMarkdown} from '../utils/get-html-from-markdown';
import {Markdown, Title} from '../pages-styles/cgv.styles';
import {MarkdownComponent} from '../components/markdown/markdown.component';

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
  return {
    props: {
      html: await getHtmlFromMarkdown('cgv'),
    },
  };
}
