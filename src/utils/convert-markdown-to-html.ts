import {remark} from 'remark';
import html from 'remark-html';
import {Markdown} from './get-markdown';

export async function convertMarkdownToHtml(markdown: Markdown): Promise<string> {
  const result = await remark().use(html).process(markdown.content);
  return result.toString();
}
