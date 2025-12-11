'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export default function DisplayContent({ content }: { content?: string | null }) {
  if (!content) return null;

  
  return (
    <div>
      <article className="prose prose-lg max-w-none mx-auto py-4">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            h2: ({ children }) => (
              <h2 className="text-heading-xs mb-4">{children}</h2>
            ),

            p: ({ children }) => (
              <p className="text-label-md mb-2 text-neutral-700">{children}</p>
            ),

            ul: ({ children }) => (
              <ul className="list-disc mb-2 pl-4 text-neutral-700">
                {children}
              </ul>
            ),

            ol: ({ children }) => (
              <ol className="list-decimal mb-2 pl-4 text-label-md text-neutral-700">
                {children}
              </ol>
            ),

            li: ({ children }) => (
              <li className="mb-2 text-label-md pl-4">{children}</li>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
