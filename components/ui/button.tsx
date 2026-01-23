import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap  transition-all disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        secondary:
          "bg-neutral-900 text-neutral-50! text-label-3xs rounded-sm uppercase hover:bg-neutral-800 focus-visible:ring-neutral-900/20 disabled:bg-neutral-800/30",
        default:
          "bg-accent-500 text-neutral-900 text-label-3xs rounded-sm uppercase hover:bg-accent-400 focus-visible:ring-accent-500/20 disabled:bg-accent-500/30",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "rounded-sm border border-neutral-900 text-neutral-900 text-label-3xs hover:text-neutral-50 uppercase bg-transparent hover:bg-neutral-800 focus-visible:ring-neutral-800/20 disabled:bg-neutral-800/30",
        ghost:
          "rounded-sm text-neutral-900 text-label-3xs hover:text-neutral-800 uppercase bg-transparent disabled:opacity-30",
        link:
          "rounded-sm text-neutral-900 text-label-3xs hover:text-accent-500 uppercase bg-transparent disabled:opacity-30",
        neutral: "bg-neutral-100 text-neutral-900 text-label-3xs rounded-sm uppercase disabled:bg-neutral-200/30 hover:bg-neutral-200 focus-visible:ring-neutral-100/20",
      },
      size: {
        default: "px-4 py-3 has-[>svg]:px-3 rounded-sm w-fit",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
