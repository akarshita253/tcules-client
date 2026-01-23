import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import ContactForm from "./ContactForm";
import ApolloWrapper from "@/lib/providers/ApolloWrapper";

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type ButtonTagProps = {
  href: string;
  className?: string;
  variant?: ButtonVariantProps["variant"];
  size?: ButtonVariantProps["size"];
  target?: "_self" | "_blank";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
} & (
  | { label: string; children?: never }
  | { children: React.ReactNode; label?: never }
);

const ButtonTag = ({
  target = "_self",
  href,
  label,
  className,
  variant = "default",
  size = "default",
  children,
  icon,
  iconPosition = "right",
}: ButtonTagProps) => {
  const isPopover = href.toLowerCase() === "popover";
  if (!isPopover) {
    const linkClassName = children
      ? className
      : cn(buttonVariants({ variant, size }), className);

    return (
      <Link
        href={href || "#"}
        target={target || "_self"}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={linkClassName}
      >
        {icon && iconPosition !== "right" && icon}
        {children ?? label}
        {icon && iconPosition === "right" && icon}
      </Link>
    );
  } else {
    return (
      <>
        <Dialog>
          <DialogTrigger asChild>
            <p className={cn(buttonVariants({ variant, size }), className)}>
              {children ?? label}
            </p>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[925px]">
            <DialogHeader>
              <DialogTitle className="hidden" />
              <h2 className="text-heading-xs text-neutral-800">Contact Us</h2>
            </DialogHeader>
            <ApolloWrapper>
              <ContactForm className="w-full mb-0 p-0 sm:mb-0" />
            </ApolloWrapper>
          </DialogContent>
        </Dialog>
      </>
    );
  }
};

export default ButtonTag;
