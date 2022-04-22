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
import {getProduct} from '../../utils/get-product';
import {getProductSlugs} from '../../utils/get-product-slugs';

export default function Product({
  data,
  content,
  images,
}: ProductLayoutProps): ReactElement {
  const [slug, setSlug] = useState(data.slug);

  useEffect(() => {
    setSlug(data.slug);
  }, [data.slug]);

  return (
    <>
      {data.slug !== slug ? (
        <></>
      ) : (
        <ProductLayout
          data={data}
          content={content}
          color={data.color}
          images={images}
        />
      )}
    </>
  );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const products = getProductSlugs();

  const paths = products.map((product) => ({
    params: {
      product,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<ProductLayoutProps>> {
  const {product} = context.params;

  if (Array.isArray(product)) {
    throw new Error('Product name is not defined');
  }

  return {
    props: await getProduct(product),
  };
}
