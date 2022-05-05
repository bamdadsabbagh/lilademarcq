import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {CatalogInterface, fetchCatalog} from '../utils/fetch-catalog';
import {FooterComponent} from '../components/footer/footer.component';
import {fetchSocials, LDSocial} from '../utils/fetch-socials';
import {fetchPress, LDMyPress} from '../utils/fetch-press';
import {PressLayout} from '../layouts/press/press.layout';
import {REVALIDATE} from '../constants';

interface Props {
  catalog: CatalogInterface;
  socials: LDSocial[];
  press: LDMyPress;
}

export default function Presse({
  catalog,
  socials,
  press,
}: Props): ReactElement {
  return (
    <>
      <PressLayout myPress={press} />
      <FooterComponent catalog={catalog} socials={socials} />
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const catalog = await fetchCatalog();
  const socials = await fetchSocials();
  const press = await fetchPress();

  return {
    props: {
      catalog,
      socials,
      press,
    },
    revalidate: REVALIDATE,
  };
}
