import {GetStaticPropsResult} from 'next';
import React from 'react';
import {FooterComponent} from '../components/footer/footer.component';
import {SeoComponent} from '../components/seo/seo.component';
import {REVALIDATE} from '../constants';
import {PressLayout} from '../layouts/press/press.layout';
import {fetchCatalog, LDCatalog} from '../utils/fetch-catalog';
import {fetchMyPress, LDMyPress} from '../utils/fetch-my-press';
import {fetchSocials, LDSocial} from '../utils/fetch-socials';

interface Props {
  catalog: LDCatalog;
  socials: LDSocial[];
  myPress: LDMyPress;
}

export default function Presse({
  catalog,
  socials,
  myPress,
}: Props): JSX.Element {
  return (
    <>
      <SeoComponent
        canonical="presse"
        title={myPress.seoTitle}
        description={myPress.seoDescription}
        image={myPress.seoImage}
      />
      <PressLayout myPress={myPress} />
      <FooterComponent
        catalog={catalog}
        socials={socials}
      />
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const catalog = await fetchCatalog();
  const socials = await fetchSocials();
  const myPress = await fetchMyPress();

  return {
    props: {
      catalog,
      socials,
      myPress,
    },
    revalidate: REVALIDATE,
  };
}
