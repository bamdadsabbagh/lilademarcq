import {NextApiRequest, NextApiResponse} from 'next';
import {getProductSlugs} from '../../utils/get-product-slugs';
import {getMarkdown} from '../../utils/get-markdown';
import {PRODUCTS_DIRECTORY} from '../../constants';

interface Item {
  text: string;
  href: string;
  position: number;
}

interface Route {
  text: string;
  href: string;
  items?: Item[];
}

export default function ApiRoutes(_req: NextApiRequest, res: NextApiResponse<Route[]>): void {
  const slugs = getProductSlugs();

  const objects: Item[] = slugs.map((slug) => {
    const markdown = getMarkdown(slug, `${PRODUCTS_DIRECTORY}/${slug}`);
    const {name, menuName, position} = markdown.data;

    return {
      text: menuName ? menuName : name,
      href: `/objets/${slug}`,
      position: position ? Number(position) : 1000,
    };
  });

  // sort objects by position
  objects.sort((a, b) => a.position - b.position);

  res.status(200).json([
    {text: 'home', href: '/'},
    {text: 'à propos', href: '/a-propos'},
    {
      text: 'objets',
      href: '/objets',
      items: objects,
    },
    {text: 'poésie', href: '/poesie'},
    {text: 'événements', href: '/evenements'},
    {text: 'presse', href: '/presse'},
    {text: 'livre d\'or', href: '/livre-d-or'},
  ]);
}
