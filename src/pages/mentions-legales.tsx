import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {SectionComponent} from '../components/section/section.component';
import {theme} from '../app/styles/theme';
import {Markdown, Title} from '../pages-styles/mentions-legales.styles';
import {fetchSection, LDSection} from '../utils/fetch-section';
import {REVALIDATE} from '../constants';

interface MentionsLegalesProps {
  section: LDSection;
}

export default function MentionsLegales({
  section,
}: MentionsLegalesProps): ReactElement {
  return (
    <SectionComponent backgroundColor={theme.salmonLight}>
      <>
        <Title>
          {section.title}
        </Title>
        <Markdown>
          {documentToReactComponents(section.body.json)}
        </Markdown>
      </>
    </SectionComponent>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<MentionsLegalesProps>> {
  const section = await fetchSection('mentions-legales');

  return {
    props: {
      section,
    },
    revalidate: REVALIDATE,
  };
}
