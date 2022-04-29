import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {fetchSection, LDSection} from '../utils/fetch-section';
import {REVALIDATE} from '../constants';
import {SectionLayout} from '../layouts/section/section.layout';

interface CgvProps {
  section: LDSection;
}

export default function Cgv({
  section,
}: CgvProps): ReactElement {
  return <SectionLayout section={section} />;
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
