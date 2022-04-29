import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {fetchSection, LDSection} from '../utils/fetch-section';
import {REVALIDATE} from '../constants';
import {SectionLayout} from '../layouts/section/section.layout';

interface MentionsLegalesProps {
  section: LDSection;
}

export default function MentionsLegales({
  section,
}: MentionsLegalesProps): ReactElement {
  return <SectionLayout section={section} />;
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
