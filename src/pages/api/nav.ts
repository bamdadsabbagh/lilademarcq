import {NextApiRequest, NextApiResponse} from 'next';
import {fetchMenu} from '../../utils/fetch-menu';
import {NavAtom} from '../../atoms/menuAtom';

export default async function NavHandler(
  _req: NextApiRequest,
  res: NextApiResponse<NavAtom>,
): Promise<void> {
  const children = await fetchMenu();

  children.sort((a, b) => a.position - b.position);

  res.status(200).json([
    {name: 'home', slug: '/'},
    {name: 'à propos', slug: '/a-propos'},
    {name: 'objets', slug: '/objets', children},
    {name: 'poésie', slug: '/poesie'},
    {name: 'événements', slug: '/evenements'},
    {name: 'presse', slug: '/presse'},
    {name: 'livre d\'or', slug: '/livre-d-or'},
  ]);
}
