import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {
  ProductLayout,
  ProductLayoutProps,
} from '../../layouts/product/product.layout';
import {theme} from '../../app/styles/theme';
import {getProductProps} from '../../utils/get-product-props';

export default function Indlu({
  data,
  content,
}: ProductLayoutProps): ReactElement {
  return (
    <>
      <ProductLayout data={data} content={content} color={theme.salmonDark} />
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<ProductLayoutProps>> {
  return {
    props: await getProductProps('objets-indlu'),
  };
}
