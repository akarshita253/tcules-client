import Section from "@/components/global/Section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CapablitiesCardSection } from "../CapablityContainer";

type EngineeringServiceSectionProps = {
  engineeringServiceSectionData: CapablitiesCardSection;
};

const EngineeringServiceSection = ({engineeringServiceSectionData}:EngineeringServiceSectionProps) => {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:mb-12 mb-6">
        <h2 className="p-8">
            <span className="text-heading-sm text-neutral-800">{engineeringServiceSectionData?.heading?.split("|").at(0)}</span>
            <span className="text-display-xs text-accent-600">{engineeringServiceSectionData?.heading?.split("|").at(1)}</span>
        </h2>
        {engineeringServiceSectionData?.sectionCards?.map((singleCard) => {
          return (
            <div
              className="p-4 sm:p-6 bg-neutral-100 rounded-xl"
              key={singleCard?.id}
            >
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
                      <span className="shrink-0 relative top-1">
                        <ArrowRight
                          width={20}
                          height={20}
                          className="text-neutral-700"
                        />
                      </span>

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
          <Link href={engineeringServiceSectionData?.subRouteLink?.href || "#"}>
            {engineeringServiceSectionData?.subRouteLink?.name}
          </Link>
          <ArrowRight size={16} />
        </p>
      </div>
    </Section>
  );
};

export default EngineeringServiceSection;
