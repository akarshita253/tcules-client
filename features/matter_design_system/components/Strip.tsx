import Section from "@/components/global/Section";
import ButtonTag from "@/components/shared/ButtonTag";
import { MatterDesignSystemQuery } from "@/lib/codegen/graphql";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

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
        <ButtonTag icon={<ChevronRight />} href={stripData?.link?.href || "#"} label={stripData?.link?.name||"Know More"}/>
      </div>
    </Section>
  );
};

export default Strip;
