import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {PoetryLayout} from '../layouts/poetry/poetry.layout';
import {fetchMyPoetry, LDMyPoetry} from '../utils/fetch-my-poetry';
import {FooterComponent} from '../components/footer/footer.component';
import {fetchCatalog, LDCatalog} from '../utils/fetch-catalog';
import {fetchSocials, LDSocial} from '../utils/fetch-socials';
import {REVALIDATE} from '../constants';
import {SeoComponent} from '../components/seo/seo.component';

interface PoesieProps {
  myPoetry: LDMyPoetry;
  catalog: LDCatalog;
  socials: LDSocial[];
}

export default function Poesie({
  myPoetry,
  catalog,
  socials,
}: PoesieProps): ReactElement {
  return (
    <>
      <SeoComponent
        canonical="poesie"
        title={myPoetry.seoTitle}
        description={myPoetry.seoDescription}
        image={myPoetry.seoImage}
      />
      <PoetryLayout poetry={myPoetry} />
      <FooterComponent catalog={catalog} socials={socials} />
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<PoesieProps>> {
  const myPoetry = await fetchMyPoetry();
  const catalog = await fetchCatalog();
  const socials = await fetchSocials();

  return {
    props: {
      myPoetry,
      catalog,
      socials,
    },
    revalidate: REVALIDATE,
  };
}
