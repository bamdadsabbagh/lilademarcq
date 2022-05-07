import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {ObjectsModule} from '../../modules/objects/objects.module';
import {fetchMyObjects, LDMyObjects} from '../../utils/fetch-my-objects';
import {REVALIDATE} from '../../constants';
import {DefaultLayout} from '../../layouts/default/default.layout';
import {fetchCatalog, LDCatalog} from '../../utils/fetch-catalog';
import {fetchSocials, LDSocial} from '../../utils/fetch-socials';
import {FooterComponent} from '../../components/footer/footer.component';
import {SeoComponent} from '../../components/seo/seo.component';

interface ObjetsProps {
  myObjects: LDMyObjects;
  catalog: LDCatalog;
  socials: LDSocial[];
}

export default function Objets({
  myObjects,
  catalog,
  socials,
}: ObjetsProps): ReactElement {
  return (
    <>
      <SeoComponent
        canonical="objets"
        title={myObjects.seoTitle}
        description={myObjects.seoDescription}
        image={myObjects.seoImage}
      />

      <DefaultLayout>
        <ObjectsModule myObjects={myObjects} noPaddingTop />
      </DefaultLayout>

      <FooterComponent catalog={catalog} socials={socials} />
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<ObjetsProps>> {
  const myObjects = await fetchMyObjects();
  const catalog = await fetchCatalog();
  const socials = await fetchSocials();

  return {
    props: {
      myObjects,
      catalog,
      socials,
    },
    revalidate: REVALIDATE,
  };
}
