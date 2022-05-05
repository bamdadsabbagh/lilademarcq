import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {PoetryLayout} from '../layouts/poetry/poetry.layout';
import {fetchPoetry, PoetryInterface} from '../utils/fetch-poetry';
import {FooterComponent} from '../components/footer/footer.component';
import {CatalogInterface, fetchCatalog} from '../utils/fetch-catalog';
import {fetchSocials, LDSocial} from '../utils/fetch-socials';
import {REVALIDATE} from '../constants';

interface PoesieProps {
  poetry: PoetryInterface;
  catalog: CatalogInterface;
  socials: LDSocial[];
}

export default function Poesie({
  poetry,
  catalog,
  socials,
}: PoesieProps): ReactElement {
  return (
    <>
      <PoetryLayout poetry={poetry} />
      <FooterComponent catalog={catalog} socials={socials} />
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<PoesieProps>> {
  const poetry = await fetchPoetry();
  const catalog = await fetchCatalog();
  const socials = await fetchSocials();

  return {
    props: {
      poetry,
      catalog,
      socials,
    },
    revalidate: REVALIDATE,
  };
}
