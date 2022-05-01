import {NextApiRequest, NextApiResponse} from 'next';
import Mailgun from 'mailgun.js';
import formData from 'form-data';
import {verifyRecaptchaToken} from '../../utils/verify-recaptcha-token';

interface FormResponse {
  ok: boolean;
}

interface FormDataInterface {
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
  const success = () => {
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

    const html = `
      <h3>Objet</h3>
      <p>${data.topic}</p>
      
      <h3>Abonnement newsletter</h3>
      <p>${data.subscribe ? 'Oui' : 'Non'}</p>

      <h3>Nom</h3>
      <p>${data.name}</p>

      <h3>Prénom</h3>
      <p>${data.firstName}</p>
      
      ${data?.address && (`
        <h3>Adresse</h3>
        <p>${data.address}</p>
      `)}
      
      ${data?.postcode && (`
        <h3>Code postal</h3>
        <p>${data.postcode}</p>
      `)}
      
      <h3>Ville</h3>
      <p>${data.city}</p>
      
      <h3>Email</h3>
      <p>${data.email}</p>
      
      ${data?.phone && (`
        <h3>Téléphone</h3>
        <p>${data.phone}</p>
      `)}
    `;

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
      success();
    } else {
      fail();
    }
  } catch {
    fail();
  }
}
