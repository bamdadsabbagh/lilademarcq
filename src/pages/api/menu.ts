import {NextApiRequest, NextApiResponse} from 'next';
import {fetchMenu, MenuInterface} from '../../utils/fetch-menu';

export default async function Handler(
  _req: NextApiRequest,
  res: NextApiResponse<MenuInterface>,
): Promise<void> {
  const menu = await fetchMenu();
  res.status(200).json(menu);
}
