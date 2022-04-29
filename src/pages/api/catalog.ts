import {NextApiRequest, NextApiResponse} from 'next';
import {CatalogInterface, fetchCatalog} from '../../utils/fetch-catalog';

export default async function FormHandler(
  _req: NextApiRequest,
  res: NextApiResponse<CatalogInterface>,
): Promise<void> {
  const catalog = await fetchCatalog();
  res.status(200).json(catalog);
}
