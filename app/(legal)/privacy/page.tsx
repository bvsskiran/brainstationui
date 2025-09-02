import type { Metadata } from 'next';

import fs from 'fs';
import path from 'path';
import md from 'markdown-it';

export const metadata: Metadata = {
  title: 'Privacy',
};

const Page = () => {
  const filePath = path.join(process.cwd(), 'src/content/privacy/privacy.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');

  return (
    <div
      className="prose container mx-auto mt-8 max-w-3xl px-6 sm:px-6 lg:prose-xl prose-headings:font-heading prose-headings:leading-tighter prose-headings:font-bold prose-headings:tracking-tighter prose-a:text-primary-600 prose-img:rounded-md prose-img:shadow-lg dark:prose-invert dark:prose-headings:text-slate-300 dark:prose-a:text-primary-400 prose-p:text-[18px] prose-li:text-[18px] prose-h1:text-[24px] prose-h2:text-[20px] prose-h3:text-[20px] prose-h1:mb-4 prose-h2:mb-3 prose-p:first:text-[18px]"
      dangerouslySetInnerHTML={{
        __html: md({
          html: true,
        }).render(fileContent),
      }}
    />
  );
};

export default Page;
