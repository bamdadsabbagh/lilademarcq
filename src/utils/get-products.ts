import {getMarkdown} from './get-markdown';
import {ProductTile} from '../modules/products/products.module';
import {getProductSlugs} from './get-product-slugs';
import {PRODUCTS_DIRECTORY} from '../constants';
import {getThumbnail} from './get-thumbnail';

export function getProducts(): ProductTile[] {
  const products = getProductSlugs();
  const props = [];

  products.forEach((product) => {
    const {data} = getMarkdown(product, `${PRODUCTS_DIRECTORY}/${product}`);

    const thumbnail = getThumbnail(product);

    props.push({
      slug: product,
      position: data.position,
      name: data.name,
      description: data.description,
      thumbnail,
    });
  });

  props.sort((a, b) => a.position - b.position);

  return props;
}
