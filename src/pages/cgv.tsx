import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {SectionComponent} from '../components/section/section.component';
import {theme} from '../app/styles/theme';
import {Markdown, Title} from '../pages-styles/cgv.styles';
import {fetchSection, LDSection} from '../utils/fetch-section';
import {REVALIDATE} from '../constants';
import {MetaComponent} from '../components/meta/meta.component';
import {DefaultLayout} from '../layouts/default/default.layout';

interface CgvProps {
  section: LDSection;
}

export default function Cgv({
  section,
}: CgvProps): ReactElement {
  return (
    <>
      <MetaComponent description={section.title} />
      <DefaultLayout customMeta>
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
      </DefaultLayout>
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<CgvProps>> {
  const section = await fetchSection('cgv');

  return {
    props: {
      section,
    },
    revalidate: REVALIDATE,
  };
}
