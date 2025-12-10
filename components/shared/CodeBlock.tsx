// components/CodeBlock.tsx
'use client';

import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface CodeBlockProps {
  codeSnippet: string;
}

export default function CodeBlock({ codeSnippet }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  // Extract code from triple backticks (handles ```css\ncode\n``` or just plain text)
  const match = codeSnippet.match(/```(?:\w+)?\n?([\s\S]*?)```/);
  const code = match ? match[1].trim() : codeSnippet.trim();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-12 mx-auto">
      <div className="relative rounded-2xl overflow-hidden border border-gray-200">
        {/* Header with copy button on the right */}
        <div className="flex items-center justify-end px-3 bg-[#E6E6E6]">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 "
            aria-label="Copy code"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-600" />
              </>
            ) : (
              <>
                <Copy className="w-ml-1 w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {/* Code area - dark gray background */}
        <pre className="m-0 p-4 overflow-x-auto bg-[#b1b1b12e] text-[#6D6D6D]">
          <code className="text-sm font-mono leading-relaxed">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}