import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {fetchSection, LDSection} from '../utils/fetch-section';
import {REVALIDATE} from '../constants';
import {SectionLayout} from '../layouts/section/section.layout';

interface PolitiqueDeConfidentialiteProps {
  section: LDSection;
}

export default function PolitiqueDeConfidentialite({section}: PolitiqueDeConfidentialiteProps): ReactElement {
  return <SectionLayout section={section} />;
}

export async function getStaticProps(): Promise<GetStaticPropsResult<PolitiqueDeConfidentialiteProps>> {
  const section = await fetchSection('privacy-policy');

  return {
    props: {
      section,
    },
    revalidate: REVALIDATE,
  };
}
