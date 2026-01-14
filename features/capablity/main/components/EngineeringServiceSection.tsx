import Section from "@/components/global/Section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CapablitiesCardSection } from "../CapablityContainer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
              className="p-4 sm:p-6 bg-neutral-100 rounded-xl flex flex-col justify-between gap-4 min-h-[300px]"
              key={singleCard?.id}
            >
              <h3 className="text-heading-2xs text-neutral-900">
                {singleCard?.heading}
              </h3>
              <div className="flex flex-col justify-between gap-6">
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
          );
        })}
      </div>
            <div className="flex justify-center items-center">
        <Link
          href={engineeringServiceSectionData?.subRouteLink?.href || "#"}
          className={cn(buttonVariants({ variant: "default" }),"hover:bg-neutral-100 bg-neutral-50")}
        >
          {engineeringServiceSectionData?.subRouteLink?.name}
        <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
};

export default EngineeringServiceSection;
