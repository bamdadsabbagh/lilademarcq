import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {fetchCatalog, LDCatalog} from '../utils/fetch-catalog';
import {FooterComponent} from '../components/footer/footer.component';
import {fetchSocials, LDSocial} from '../utils/fetch-socials';
import {fetchMyPress, LDMyPress} from '../utils/fetch-my-press';
import {PressLayout} from '../layouts/press/press.layout';
import {REVALIDATE} from '../constants';
import {SeoComponent} from '../components/seo/seo.component';

interface Props {
  catalog: LDCatalog;
  socials: LDSocial[];
  myPress: LDMyPress;
}

export default function Presse({
  catalog,
  socials,
  myPress,
}: Props): ReactElement {
  return (
    <>
      <SeoComponent
        canonical="presse"
        title={myPress.seoTitle}
        description={myPress.seoDescription}
        image={myPress.seoImage?.url}
      />
      <PressLayout myPress={myPress} />
      <FooterComponent catalog={catalog} socials={socials} />
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
