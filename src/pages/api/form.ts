import {NextApiRequest, NextApiResponse} from 'next';
import {fetchForm, FormInterface} from '../../utils/fetch-form';

export default async function Handler(
  _req: NextApiRequest,
  res: NextApiResponse<FormInterface>,
): Promise<void> {
  const form = await fetchForm();
  res.status(200).json(form);
}
