import Section from "@/components/global/Section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CapablitiesCardSection } from "../CapablityContainer";
import Image from "next/image";

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
              className="p-4 sm:p-6 bg-neutral-100 rounded-xl"
              key={singleCard?.id}
            >
              <div className="flex justify-end">
                {singleCard?.icon?.url && (
                  <Image
                    src={singleCard?.icon?.url}
                    width={singleCard?.icon?.width || 26}
                    height={singleCard?.icon?.height || 26}
                    alt={singleCard?.icon?.alternativeText || "icon"}
                  />
                )}
              </div>
              <h3 className="text-heading-2xs text-neutral-900 mb-8 md:mb-12 w-4/5">
                {singleCard?.heading}
              </h3>
              <div>
                {singleCard?.cardPoints?.map((singleTile) => {
                  return (
                    <div
                      key={singleTile?.id}
                      className="flex items-start  gap-2"
                    >
                      <p className="sm:mb-6 mb-4">
                        <span className="text-label-md text-neutral-700">
                          {singleTile?.listText}
                        </span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <p className="text-label-3xs text-neutral-900 text-center uppercase flex items-center gap-3 justify-center">
          <Link href={howWeWorkSectionData?.subRouteLink?.href || "#"}>
            {howWeWorkSectionData?.subRouteLink?.name}
          </Link>
          <ArrowRight size={16} />
        </p>
      </div>
    </Section>
  );
};

export default HowWeWorkSection;
