import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {ProductsModule} from '../../modules/products/products.module';
import {fetchObjects} from '../../utils/fetch-objects';
import {LDObject} from '../../utils/fetch-object';
import {REVALIDATE} from '../../constants';

interface ObjetsProps {
  objects: LDObject[];
}

export default function Objets({objects}: ObjetsProps): ReactElement {
  return (
    <>
      <ProductsModule products={objects} />
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
