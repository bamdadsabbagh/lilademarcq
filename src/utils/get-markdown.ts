import {join} from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import {DATA_DIRECTORY} from '../constants';

export interface Markdown {
  content: string;
  data: {
    [key: string]: string;
  };
}

export function getMarkdown(targetSlug: string, targetDirectory = DATA_DIRECTORY): Markdown {
  const workingDirectory = join(process.cwd(), targetDirectory);
  const filenames = fs.readdirSync(workingDirectory);
  const payload: Markdown[] = [];

  filenames.forEach((filename) => {
    if (filename !== `${targetSlug}.md`) {
      return;
    }

    const path = join(workingDirectory, filename);
    const f = fs.readFileSync(path, 'utf8');
    const {data, content} = matter(f);

    const cleanedContent = content.replace('\'', '’');

    payload.push({
      content: cleanedContent,
      data,
    });
  });

  return payload[0];
}
