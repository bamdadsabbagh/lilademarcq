import {NextApiRequest, NextApiResponse} from 'next';
import {verifyRecaptchaToken} from '../../utils/verify-recaptcha-token';
import {buildFormHtml} from '../../utils/build-form-html';
import {validateForm} from '../../utils/validate-form';
import {fetchFormTarget} from '../../utils/fetch-form-target';

interface FormResponse {
  ok: boolean;
}

export interface FormDataInterface {
  topic: string;
  name: string;
  firstName: string;
  address?: string;
  postcode?: string;
  city: string;
  email: string;
  phone?: string;
  subscribe: boolean;
  token: string;
}

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse<FormResponse>,
): Promise<void> {
  const succeed = () => {
    res.status(200).json({ok: true});
  };

  const fail = () => {
    res.status(200).json({ok: false});
  };

  try {
    if (
      !process.env.SENDINBLUE_API_KEY
      || !process.env.RECAPTCHA_SECRET
      || req.method !== 'POST'
    ) {
      fail();
      return;
    }

    const data = req.body as FormDataInterface;
    const isVerified = await verifyRecaptchaToken(data.token, process.env.RECAPTCHA_SECRET);

    if (!isVerified) {
      fail();
      return;
    }

    const isValid = await validateForm(data);

    if (!isValid) {
      fail();
      return;
    }

    const target = await fetchFormTarget();

    if (!target) {
      fail();
      return;
    }

    const request = await fetch(
      'https://api.sendinblue.com/v3/smtp/email',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.SENDINBLUE_API_KEY,
        },
        body: JSON.stringify({
          sender: {
            name: 'Lila Demarcq',
            email: 'noreply@lilademarcq.com',
          },
          to: [
            {
              name: 'Lila Demarcq',
              email: target,
            },
          ],
          subject: 'Lilademarcq.com: Formulaire de contact',
          htmlContent: buildFormHtml(data),
        }),
      },
    );

    if (request.status === 201) {
      succeed();
    } else {
      fail();
    }
  } catch {
    fail();
  }
}
