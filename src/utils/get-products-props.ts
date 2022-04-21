import {getMarkdown} from './get-markdown';
import {ProductTile} from '../modules/products/products.module';
import {getProductSlugs} from './get-product-slugs';
import {PRODUCTS_DIRECTORY} from '../constants';

export function getProductsProps(): ProductTile[] {
  const products = getProductSlugs();
  const props = [];

  products.forEach((product) => {
    const {data} = getMarkdown(product, `${PRODUCTS_DIRECTORY}/${product}`);

    props.push({
      slug: product,
      position: data.position,
      name: data.name,
      description: data.description,
      thumbnail: data.thumbnail,
    });
  });

  props.sort((a, b) => a.position - b.position);

  return props;
}
