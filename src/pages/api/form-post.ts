import {NextApiRequest, NextApiResponse} from 'next';
import {fetchFormTarget} from '../../utils/fetch-form-target';

interface FormPostResponse {
  ok: boolean;
}

export default async function FormPostHandler(
  req: NextApiRequest,
  res: NextApiResponse<FormPostResponse>,
): Promise<void> {
  try {
    const target = await fetchFormTarget();

    const request = await fetch(
      target,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      },
    );

    if (request.status !== 200) {
      res.status(200).json({ok: false});
      return;
    }

    res.status(200).json({ok: true});
  } catch {
    res.status(200).json({ok: false});
  }
}
