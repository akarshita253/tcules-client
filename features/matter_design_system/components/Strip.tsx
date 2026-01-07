import Section from "@/components/global/Section";
import { buttonVariants } from "@/components/ui/button";
import { MatterDesignSystemQuery } from "@/lib/codegen/graphql";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Strip = ({
  stripData,
}: {
  stripData: NonNullable<MatterDesignSystemQuery["matterDesignSystem"]>[
    | "stripOne"
    | "stripTwo"];
}) => {
  return (
    <Section>
      <div className="flex flex-col gap-6 p-8 rounded-xl bg-neutral-800 relative">
        {stripData?.bgIcon?.url && (
          <div className="absolute right-0">
            <Image
              src={stripData?.bgIcon?.url ?? ""}
              alt={stripData?.bgIcon?.alternativeText ?? ""}
              width={stripData?.bgIcon?.width ?? 0}
              height={stripData?.bgIcon?.height ?? 0}
            />
          </div>
        )}
        <h3 className="text-heading-xs text-neutral-50 w-4/5 z-10">
          {stripData?.heading}
        </h3>
        <p className="text-label-xl text-neutral-200">
          {stripData?.description}
        </p>
        <Link
          className={cn(
            buttonVariants({ variant: "default" }),
            "flex items-center gap-1"
          )}
          href={stripData?.link?.href || "#"}
        >
          {stripData?.link?.name}
          <ChevronRight />
        </Link>
      </div>
    </Section>
  );
};

export default Strip;
