import {NextApiRequest, NextApiResponse} from 'next';
import Mailgun from 'mailgun.js';
import formData from 'form-data';
import {verifyRecaptchaToken} from '../../utils/verify-recaptcha-token';
import {buildFormHtml} from '../../utils/build-form-html';
import {validateForm} from '../../utils/validate-form';

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
      !process.env.MAILGUN_API_KEY
      || !process.env.MAILGUN_DOMAIN_NAME
      || !process.env.MAILGUN_TARGET
      || req.method !== 'POST'
    ) {
      fail();
      return;
    }

    const data = req.body as FormDataInterface;
    const isVerified = await verifyRecaptchaToken(data.token);

    if (!isVerified) {
      fail();
      return;
    }

    const isValid = await validateForm(data);

    if (!isValid) {
      fail();
      return;
    }
    
    const html = buildFormHtml(data);

    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY,
    });

    const result = await mg.messages.create(process.env.MAILGUN_DOMAIN_NAME, {
      from: 'Lila Demarcq <mailgun@lilademarcq.com>',
      to: [process.env.MAILGUN_TARGET],
      subject: 'Lilademarcq.com: Formulaire de contact',
      text: '',
      html,
    });

    if (result.status === 200) {
      succeed();
    } else {
      fail();
    }
  } catch {
    fail();
  }
}
