import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {ObjectsModule} from '../../modules/objects/objects.module';
import {fetchObjects} from '../../utils/fetch-objects';
import {LDObject} from '../../utils/fetch-object';
import {REVALIDATE} from '../../constants';
import {MetaComponent} from '../../components/meta/meta.component';
import {DefaultLayout} from '../../layouts/default/default.layout';
import {CatalogInterface, fetchCatalog} from '../../utils/fetch-catalog';
import {fetchSocials, LDSocial} from '../../utils/fetch-socials';
import {FooterComponent} from '../../components/footer/footer.component';

interface ObjetsProps {
  objects: LDObject[];
  catalog: CatalogInterface;
  socials: LDSocial[];
}

export default function Objets({
  objects,
  catalog,
  socials,
}: ObjetsProps): ReactElement {
  return (
    <>
      <MetaComponent description="Objets" />

      <DefaultLayout customMeta>
        <ObjectsModule objects={objects} noPaddingTop />
      </DefaultLayout>

      <FooterComponent catalog={catalog} socials={socials} />
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<ObjetsProps>> {
  const objects = await fetchObjects();
  const catalog = await fetchCatalog();
  const socials = await fetchSocials();

  return {
    props: {
      objects,
      catalog,
      socials,
    },
    revalidate: REVALIDATE,
  };
}
