import React, {ReactElement, useEffect, useState} from 'react';
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import {
  ProductLayout,
  ProductLayoutProps,
} from '../../layouts/product/product.layout';
import {fetchObjects} from '../../utils/fetch-objects';
import {fetchObject} from '../../utils/fetch-object';
import {REVALIDATE} from '../../constants';

export default function Product({
  object,
}: ProductLayoutProps): ReactElement {
  const [slug, setSlug] = useState(object.slug);

  useEffect(() => {
    setSlug(object.slug);
  }, [object.slug]);

  return (
    <>
      {object.slug !== slug ? (
        <></>
      ) : (
        <ProductLayout object={object} />
      )}
    </>
  );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const objects = await fetchObjects();

  const paths = objects.map((object) => ({
    params: {
      product: object.slug,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<ProductLayoutProps>> {
  const {product} = context.params;

  if (Array.isArray(product)) {
    throw new Error('Product name is not defined');
  }

  const object = await fetchObject(product);

  return {
    props: {
      object,
    },
    revalidate: REVALIDATE,
  };
}
