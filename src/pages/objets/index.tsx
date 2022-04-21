import React, {ReactElement} from 'react';
import {GetStaticPropsResult} from 'next';
import {
  ProductsModule,
  ProductTile,
} from '../../modules/products/products.module';
import {getProducts} from '../../utils/get-products';

interface ObjetsProps {
  products: ProductTile[];
}

export default function Objets({products}: ObjetsProps): ReactElement {
  return (
    <>
      <ProductsModule products={products} />
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<ObjetsProps>> {
  return {
    props: {
      products: getProducts(),
    },
  };
}
