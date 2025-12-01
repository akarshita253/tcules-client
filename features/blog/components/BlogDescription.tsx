'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

export default function BlogDescription({ content }: { content?: string | null }) {
  if (!content) return null;

  return (
    <div className="">
      <article className="prose prose-lg max-w-none mt-12 mx-auto">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[
            rehypeRaw,          
            rehypeSanitize 
          ]}
          components={{
           
            h2: ({ children }) => <h2 className="text-4xl font-bold mt-12 mb-6">{children}</h2>,
            p: ({ children }) => <p className="mb-4">{children}</p>,
            a: ({ href, children }) => (
              <a href={href} className="text-blue-600 hover:underline" target="_blank" rel="noopener">
                {children}
              </a>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}