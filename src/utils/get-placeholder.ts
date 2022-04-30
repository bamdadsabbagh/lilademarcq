import {getPlaiceholder} from 'plaiceholder';

export async function getPlaceholder(url: string): Promise<string> {
  const {base64} = await getPlaiceholder(url);
  return base64;
}
