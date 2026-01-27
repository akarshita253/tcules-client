"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <h2 className="text-heading-xl mb-8">Something went wrong!</h2>

      <Button variant="destructive" size="lg" asChild>
        <Link href="/" className="w-fit">Home</Link>
      </Button>
    </div>
  );
}
