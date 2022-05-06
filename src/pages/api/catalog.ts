import {NextApiRequest, NextApiResponse} from 'next';
import {fetchCatalog, LDCatalog} from '../../utils/fetch-catalog';

export default async function Handler(
  _req: NextApiRequest,
  res: NextApiResponse<LDCatalog>,
): Promise<void> {
  const catalog = await fetchCatalog();
  res.status(200).json(catalog);
}
