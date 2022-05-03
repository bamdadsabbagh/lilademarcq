import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {PoetryLayout} from '../layouts/poetry/poetry.layout';
import {fetchPoetry, PoetryInterface} from '../utils/fetch-poetry';

interface PoesieProps {
  poetry: PoetryInterface;
}

export default function Poesie({poetry}: PoesieProps): ReactElement {
  return <PoetryLayout poetry={poetry} />;
}

export async function getStaticProps(): Promise<GetStaticPropsResult<PoesieProps>> {
  const poetry = await fetchPoetry();

  return {
    props: {
      poetry,
    },
  };
}
