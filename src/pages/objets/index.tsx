import {GetStaticPropsResult} from 'next';
import React from 'react';
import {FooterComponent} from '../../components/footer/footer.component';
import {SeoComponent} from '../../components/seo/seo.component';
import {REVALIDATE} from '../../constants';
import {DefaultLayout} from '../../layouts/default/default.layout';
import {ObjectsModule} from '../../modules/objects/objects.module';
import {fetchCatalog, LDCatalog} from '../../utils/fetch-catalog';
import {fetchMyObjects, LDMyObjects} from '../../utils/fetch-my-objects';
import {fetchSocials, LDSocial} from '../../utils/fetch-socials';

interface ObjetsProps {
  myObjects: LDMyObjects;
  catalog: LDCatalog;
  socials: LDSocial[];
}

export default function Objets({
  myObjects,
  catalog,
  socials,
}: ObjetsProps): JSX.Element {
  return (
    <>
      <SeoComponent
        canonical="objets"
        title={myObjects.seoTitle}
        description={myObjects.seoDescription}
        image={myObjects.seoImage}
      />

      <DefaultLayout>
        <ObjectsModule
          myObjects={myObjects}
          noPaddingTop
          isMain
        />
      </DefaultLayout>

      <FooterComponent
        catalog={catalog}
        socials={socials}
      />
    </>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<ObjetsProps>
  > {
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
