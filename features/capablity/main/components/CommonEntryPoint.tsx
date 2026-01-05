import Section from "@/components/global/Section";
import { CapablitiesCardSection } from "../CapablityContainer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

type CommonEntryPointProps = {
  commonEntryPointSectionData: CapablitiesCardSection;
};
const CommonEntryPoint = ({
  commonEntryPointSectionData,
}: CommonEntryPointProps) => {
  return (
    <Section>
      <h2 className="text-heading-xs text-neutral-800 mb-6 sm:mb-12">
        {commonEntryPointSectionData?.heading}
      </h2>
      <div className="flex flex-col gap-6">
        {commonEntryPointSectionData?.sectionCards &&
          commonEntryPointSectionData?.sectionCards?.map((singleCard) => {
            return (
              <div
                className="p-8 shadow-[0_4px_45.1px_0_rgb(0_0_0/0.05)] hover:bg-neutral-100 cursor-pointer flex justify-between gap-6  rounded-xl"
                key={singleCard?.id}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-heading-xs text-neutral-800 font-medium">
                    {singleCard?.heading}
                  </h3>
                  <p className="text-label-xl text-neutral-700 sm:w-1/2">
                    {singleCard?.description}
                  </p>
                </div>
                <div className="flex flex-col gap-4 justify-between items-end">
                  {singleCard?.icon?.url && (
                    <Image
                      src={singleCard?.icon?.url}
                      width={singleCard?.icon?.width || 40}
                      height={singleCard?.icon?.height || 40}
                      alt={singleCard?.icon?.alternativeText || ""}
                    />
                  )}
                  <Link
                    className="text-label-3xs font-semibold flex gap-2 items-center"
                    href={singleCard?.link?.href || "#"}
                  >
                    {singleCard?.link?.name}
                    <ArrowRight size={16} />{" "}
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </Section>
  );
};

export default CommonEntryPoint;
