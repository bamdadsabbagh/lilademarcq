import {NextApiRequest, NextApiResponse} from 'next';
import {fetchMenu} from '../../utils/fetch-menu';

interface Item {
  slug: string;
  position: number;
  name: string;
  menuName: string | null;
}

export interface Route {
  name: string;
  slug: string;
  items?: Item[];
}

export default async function ApiRoutes(_req: NextApiRequest, res: NextApiResponse<Route[]>): Promise<void> {
  const menu = await fetchMenu();
  menu.sort((a, b) => a.position - b.position);

  res.status(200).json([
    {name: 'home', slug: '/'},
    {name: 'à propos', slug: '/a-propos'},
    {
      name: 'objets',
      slug: '/objets',
      items: menu,
    },
    {name: 'poésie', slug: '/poesie'},
    {name: 'événements', slug: '/evenements'},
    {name: 'presse', slug: '/presse'},
    {name: 'livre d\'or', slug: '/livre-d-or'},
  ]);
}
