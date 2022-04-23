import {NextApiRequest, NextApiResponse} from 'next';
import {fetchForm} from '../../utils/fetch-form';
import {FormAtom} from '../../atoms/form.atom';

export default async function FormHandler(
  _req: NextApiRequest,
  res: NextApiResponse<FormAtom>,
): Promise<void> {
  const form = await fetchForm();
  res.status(200).json(form);
}
