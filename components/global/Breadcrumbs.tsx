"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter((seg) => seg.length > 0);
  const crumbs = [
    { name: "Home", href: "/" },
    ...pathSegments.map((segment, index) => ({
      name: segment.replace(/-/g, " "),
      href: "/" + pathSegments.slice(0, index + 1).join("/"),
    })),
  ];

  return (
    <div className={cn("md:mb-12 mb-9 text-label-2xs text-neutral-500",className)}>
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;

        return (
          <span key={crumb.href} className="inline-flex items-center">
            {isLast ? (
              <span className="text-label-2xs capitalize cursor-pointer">
                {crumb.name}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className="hover:underline transition capitalize"
              >
                {crumb.name}
              </Link>
            )}
            {!isLast && <span className="mx-2 text-neutral-400">/</span>}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;