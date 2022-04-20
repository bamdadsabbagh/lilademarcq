import {getMarkdown} from './get-markdown';
import {convertMarkdownToHtml} from './convert-markdown-to-html';
import {ProductLayoutProps} from '../layouts/product/product.layout';
import {getProductCarousel} from './get-product-carousel';

export async function getProductProps(slug: string): Promise<ProductLayoutProps> {
  const markdown = getMarkdown(slug);
  const {
    name,
    description,
    structure,
    structureDetails,
  } = markdown.data;

  const html = await convertMarkdownToHtml(markdown);
  const images = getProductCarousel(slug);

  return {
    data: {
      name,
      description,
      structure,
      structureDetails,
    },
    content: html,
    images,
  };
}
