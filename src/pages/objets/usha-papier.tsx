import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {
  ProductLayout,
  ProductLayoutProps,
} from '../../layouts/product/product.layout';
import {theme} from '../../app/styles/theme';
import {getProductProps} from '../../utils/get-product-props';

export default function UshaPapier({
  data,
  content,
}: ProductLayoutProps): ReactElement {
  return (
    <>
      <ProductLayout data={data} content={content} color={theme.gold} />
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<ProductLayoutProps>> {
  return {
    props: await getProductProps('objets-usha-papier'),
  };
}
