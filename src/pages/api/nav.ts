import {NextApiRequest, NextApiResponse} from 'next';
import {fetchMenu} from '../../utils/fetch-menu';
import {NavAtom} from '../../atoms/nav.atom';

export default async function NavHandler(
  _req: NextApiRequest,
  res: NextApiResponse<NavAtom>,
): Promise<void> {
  const menu = await fetchMenu();

  menu.sort((a, b) => a.position - b.position);

  res.status(200).json([
    {name: 'home', slug: '/'},
    {name: 'à propos', slug: '/a-propos'},
    {name: 'objets', slug: '/objets', items: menu},
    {name: 'poésie', slug: '/poesie'},
    {name: 'événements', slug: '/evenements'},
    {name: 'presse', slug: '/presse'},
    {name: 'livre d\'or', slug: '/livre-d-or'},
  ]);
}
