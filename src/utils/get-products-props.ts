import {getMarkdown} from './get-markdown';
import {ProductTile} from '../modules/products/products.module';

export function getProductsProps(): ProductTile[] {
  const indlu = getMarkdown('objets-indlu');
  const isiqu = getMarkdown('objets-isiqu');
  const isihla = getMarkdown('objets-isihla');
  const saPoro = getMarkdown('objets-sa-poro');
  const ushaPapier = getMarkdown('objets-usha-papier');
  const ushaAcier = getMarkdown('objets-usha-acier');

  const build = (p) => ({
    name: p.data.name,
    description: p.data.description,
    slug: p.data.slug,
    thumbnail: p.data.thumbnail,
  });

  return [
    build(indlu),
    build(isiqu),
    build(isihla),
    build(saPoro),
    build(ushaPapier),
    build(ushaAcier),
  ];
}
