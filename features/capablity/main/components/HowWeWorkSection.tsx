import Section from "@/components/global/Section";
import { ArrowRight } from "lucide-react";
import { CapablitiesCardSection } from "../CapablityContainer";
import Image from "next/image";
import ButtonTag from "@/components/shared/ButtonTag";

type HowWeWorkSectionProps = {
  howWeWorkSectionData: CapablitiesCardSection;
};

const HowWeWorkSection = ({ howWeWorkSectionData }: HowWeWorkSectionProps) => {
  return (
    <Section>
      <h2 className="text-heading-xs text-neutral-800 mb-6 sm:mb-12">
        {howWeWorkSectionData?.heading}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:mb-12 mb-6 relative">
        {howWeWorkSectionData?.sectionCards?.map((singleCard) => {
          return (
            <div
              className="p-4 sm:p-6 bg-neutral-100 rounded-xl flex flex-col justify-between gap-4 min-h-[307px]"
              key={singleCard?.id}
            >
              <div className="flex">
                {singleCard?.icon?.url && (
                  <Image
                    src={singleCard?.icon?.url}
                    width={singleCard?.icon?.width || 26}
                    height={singleCard?.icon?.height || 26}
                    alt={singleCard?.icon?.alternativeText || "icon"}
                  />
                )}
              </div>
              <div>
                <h3 className="text-heading-2xs text-neutral-900  mb-6 w-4/5">
                  {singleCard?.heading}
                </h3>
                <div className="flex flex-col gap-6">
                  {singleCard?.cardPoints?.map((singleTile) => {
                    return (
                      <div
                        key={singleTile?.id}
                        className="flex items-start  gap-2"
                      >
                        <p className="">
                          <span className="text-label-md text-neutral-700">
                            {singleTile?.listText}
                          </span>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center">
        <ButtonTag
          label={howWeWorkSectionData?.subRouteLink?.name || "Learn More"}
          href={howWeWorkSectionData?.subRouteLink?.href || "#"}
          icon={<ArrowRight />}
          variant="neutral"
        />
      </div>
    </Section>
  );
};

export default HowWeWorkSection;
