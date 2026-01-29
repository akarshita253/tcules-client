import Section from "@/components/global/Section";
import { CapablitiesCardSection } from "../CapablityContainer";
import { ArrowRight } from "lucide-react";
import noise from "@/public/noise.png";
import Image from "next/image";
import ButtonTag from "@/components/shared/ButtonTag";

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
                className="p-8 shadow-[0_4px_45.1px_0_rgb(0_0_0/0.05)] relative overflow-hidden
                group hover:bg-neutral-100 cursor-pointer sm:flex justify-between gap-6  rounded-xl"
                key={singleCard?.id}
              >
                <div className="absolute hidden group-hover:block inset-0 opacity-10">
                  <Image src={noise} alt="noise" className="bg-cover" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-heading-xs text-neutral-800 font-medium">
                    {singleCard?.heading}
                  </h3> 
                  <p className="text-label-xl text-neutral-700 sm:w-1/2">
                    {singleCard?.description}
                  </p>
                </div>
                <div className="sm:flex flex-col gap-4 justify-between items-end">
                  {singleCard?.icon?.url && (
                    <Image
                      src={singleCard?.icon?.url}
                      width={singleCard?.icon?.width || 40}
                      height={singleCard?.icon?.height || 40}
                      alt={singleCard?.icon?.alternativeText || ""}
                      className="hidden sm:inline-block"
                    />
                  )}
                  <ButtonTag
                    label={singleCard?.link?.name || "Learn More"}
                    href={singleCard?.link?.href || "#"}
                    icon={<ArrowRight size={16} />}
                    variant="ghost"
                    className="group-hover:bg-neutral-50 z-100 mt-2 sm:mt-0"
                  />
                </div>
              </div>
            );
          })}
      </div>
    </Section>
  );
};

export default CommonEntryPoint;
