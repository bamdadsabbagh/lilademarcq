import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {ObjectsModule} from '../../modules/objects/objects.module';
import {fetchObjects} from '../../utils/fetch-objects';
import {LDObject} from '../../utils/fetch-object';
import {REVALIDATE} from '../../constants';
import {MetaComponent} from '../../components/meta/meta.component';
import {DefaultLayout} from '../../layouts/default/default.layout';

interface ObjetsProps {
  objects: LDObject[];
}

export default function Objets({
  objects,
}: ObjetsProps): ReactElement {
  return (
    <>
      <MetaComponent description="Objets" />
      <DefaultLayout customMeta>
        <ObjectsModule objects={objects} />
      </DefaultLayout>
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<ObjetsProps>> {
  const objects = await fetchObjects();

  return {
    props: {
      objects,
    },
    revalidate: REVALIDATE,
  };
}
