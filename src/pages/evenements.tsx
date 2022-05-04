import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {
  UnderDevelopmentLayout,
} from '../layouts/under-development/under-development.layout';
import {CatalogInterface, fetchCatalog} from '../utils/fetch-catalog';
import {FooterComponent} from '../components/footer/footer.component';
import {fetchSocials, LDSocial} from '../utils/fetch-socials';

interface Props {
  catalog: CatalogInterface;
  socials: LDSocial[];
}

export default function Evenements({
  catalog,
  socials,
}: Props): ReactElement {
  return (
    <>
      <UnderDevelopmentLayout />
      <FooterComponent catalog={catalog} socials={socials} />
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const catalog = await fetchCatalog();
  const socials = await fetchSocials();

  return {
    props: {
      catalog,
      socials,
    },
  };
}
