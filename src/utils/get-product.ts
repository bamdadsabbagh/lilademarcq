import {getMarkdown} from './get-markdown';
import {convertMarkdownToHtml} from './convert-markdown-to-html';
import {ProductLayoutProps} from '../layouts/product/product.layout';
import {getCarouselImagesByProduct} from './get-carousel-images-by-product';
import {theme} from '../app/styles/theme';

const getColor = (slug: string | undefined): string | null => {
  if (!slug) {
    return 'black';
  }

  if (theme[slug]) {
    return theme[slug];
  }

  return slug;
};

export async function getProduct(slug: string): Promise<ProductLayoutProps> {
  const markdown = getMarkdown(slug, `public/objets/${slug}`);

  const {
    name,
    description,
    structure,
    structureDetails,
    color: colorSlug,
  } = markdown.data;

  const color = getColor(colorSlug);
  const html = await convertMarkdownToHtml(markdown);
  const images = getCarouselImagesByProduct(slug);

  return {
    data: {
      slug,
      name,
      description,
      structure,
      structureDetails,
      color,
    },
    content: html,
    images,
  };
}
