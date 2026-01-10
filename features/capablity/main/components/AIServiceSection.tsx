import Section from "@/components/global/Section";
import { CapablitiesCardSection } from "../CapablityContainer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type AIServiceSectionProps = {
  aiServiceSectionData: CapablitiesCardSection;
};

const AIServiceSection = ({ aiServiceSectionData }: AIServiceSectionProps) => {
  return (
    <Section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:mb-6 mb-4">
        <div className="p-8 relative flex flex-col justify-between gap-6">
          {aiServiceSectionData?.icon?.url && (
            <div className="flex justify-end">
              <Image
                src={aiServiceSectionData?.icon?.url}
                width={aiServiceSectionData?.icon?.width || 40}
                height={aiServiceSectionData?.icon?.height || 40}
                alt={aiServiceSectionData?.icon?.alternativeText || "icon"}
              />
            </div>
          )}
          <h2>
            <span className="text-display-xs text-accent-600">
              {aiServiceSectionData?.heading?.split("|").at(0)}
            </span>
            <span className="text-heading-sm text-neutral-800">
              {aiServiceSectionData?.heading?.split("|").at(1)}
            </span>
          </h2>
        </div>
        {aiServiceSectionData?.sectionCards?.map((singleCard) => {
          return (
            <div
              className="p-4 sm:p-6 flex flex-col gap-6 justify-between bg-neutral-100 shadow-[0_4px_45.1px_0_rgb(0_0_0/0.03)] rounded-xl relative"
              key={singleCard?.id}
            >
              {singleCard?.icon?.url && (
                <div className="flex justify-end">
                  <Image
                    src={singleCard?.icon?.url}
                    width={singleCard?.icon?.width || 40}
                    height={singleCard?.icon?.height || 40}
                    alt={singleCard?.icon?.alternativeText || "icon"}
                  />
                </div>
              )}
              <div>
                <h3 className="text-heading-2xs text-neutral-900 mb-6 w-4/5">
                  {singleCard?.heading}
                </h3>
                <p className="text-label-md text-neutral-700">
                  {singleCard?.description}
                </p>
              </div>
              {singleCard?.link?.name && (
                <Link
                  className="text-label-3xs flex justify-end gap-2 items-center"
                  href={singleCard?.link?.href || "#"}
                >
                  {singleCard?.link?.name}
                  <ArrowRight size={16} />
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default AIServiceSection;
