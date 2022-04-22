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
  try {
    const workingDirectory = join(process.cwd(), targetDirectory);

    const dirStat = fs.statSync(workingDirectory);

    if (!dirStat.isDirectory()) {
      return;
    }

    const filePath = join(workingDirectory, `${targetSlug}.md`);
    const fileStat = fs.statSync(filePath);

    if (!fileStat.isFile()) {
      return;
    }

    const file = fs.readFileSync(filePath, 'utf8');
    const {data, content} = matter(file);
    const cleanedContent = content.replace('\'', '’');

    return {
      content: cleanedContent,
      data,
    };
  } catch {
    // silent fail
  }
}
