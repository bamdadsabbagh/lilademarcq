export async function verifyRecaptchaToken(token: string): Promise<boolean> {
  try {
    const request = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encodeURI(`secret=${process.env.RECAPTCHA_SECRET}&response=${token}`),
      },
    );

    const response = await request.json();
    return response.success;
  } catch {
    return false;
  }
}
