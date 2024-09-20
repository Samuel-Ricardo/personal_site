'use server';

import { remark } from 'remark';
import html from 'remark-html';

import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

export async function markdownToHtml(markdown: string) {
  const processedContent = await remark().use(html).process(markdown);
  const content = processedContent.toString();

  const window = new JSDOM('').window;
  const purify = DOMPurify(window);

  return purify.sanitize(content);
}
