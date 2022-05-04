import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {
  UnderDevelopmentLayout,
} from '../layouts/under-development/under-development.layout';
import {FooterComponent} from '../components/footer/footer.component';
import {CatalogInterface, fetchCatalog} from '../utils/fetch-catalog';
import {fetchSocials, LDSocial} from '../utils/fetch-socials';

interface Props {
  catalog: CatalogInterface;
  socials: LDSocial[];
}

export default function LivreDOr({
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
