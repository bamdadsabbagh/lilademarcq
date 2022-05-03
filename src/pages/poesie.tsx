import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {PoetryLayout} from '../layouts/poetry/poetry.layout';
import {fetchSection, LDSection} from '../utils/fetch-section';

interface PoesieProps {
  poetry: LDSection;
}

export default function Poesie({poetry}: PoesieProps): ReactElement {
  return <PoetryLayout poetry={poetry} />;
}

export async function getStaticProps(): Promise<GetStaticPropsResult<PoesieProps>> {
  const poetry = await fetchSection('poetry');

  return {
    props: {
      poetry,
    },
  };
}
