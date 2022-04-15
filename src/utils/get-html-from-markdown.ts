import {remark} from 'remark';
import html from 'remark-html';
import {join} from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import {DATA_DIRECTORY} from '../constants';

export async function getHtmlFromMarkdown(targetSlug: string, directory = DATA_DIRECTORY): Promise<string> {
  const workingDirectory = join(process.cwd(), directory);
  const filenames = fs.readdirSync(workingDirectory);
  let data = null;

  filenames.forEach((filename) => {
    const slug = filename.replace(/\.md$/, '');

    if (slug !== targetSlug) {
      return;
    }

    const path = join(workingDirectory, filename);
    const f = fs.readFileSync(path, 'utf8');
    const {content} = matter(f);

    if (!content) {
      return;
    }

    data = content;
  });

  if (!data) {
    return '';
  }

  const payload = await remark().use(html).process(data);
  return payload.toString();
}
