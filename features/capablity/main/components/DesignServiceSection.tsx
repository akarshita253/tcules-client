import Section from "@/components/global/Section";
import { CapablitiesCardSection } from "../CapablityContainer";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import CircleInside from "@/public/bulletcir.png";
import { cn } from "@/lib/utils";
import ButtonTag from "@/components/shared/ButtonTag";

type DesignServiceSectionProps = {
  designServiceSectionData: CapablitiesCardSection;
};

const DesignServiceSection = ({
  designServiceSectionData,
}: DesignServiceSectionProps) => {
  return (
    <Section>
      <h2 className="text-heading-xs text-neutral-800 mb-6 md:mb-12">
        {designServiceSectionData?.heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-12  gap-6 md:mb-12 mb-6 relative">
        {designServiceSectionData?.sectionCards?.map((singleCard, index) => {
          return (
            <div
              className={cn(
                "p-8 shadow-[0_4px_45.1px_0_rgb(0_0_0/0.03)] rounded-xl flex sm:flex-row flex-col justify-between gap-6 min-h-[300px]",
                index === 0 && "md:col-span-6",
                index === 1 && "md:col-span-6",
                index === 2 && "md:col-span-7",
                index === 3 && "md:col-span-5"
              )}
              key={singleCard?.id}
            >
              <h2 className="text-heading-2xs text-neutral-900 mb-8">
                {singleCard?.heading}
              </h2>
              <div>
                {singleCard?.cardPoints?.map((singleTile) => {
                  return (
                    <div
                      key={singleTile?.id}
                      className="flex items-start gap-2"
                    >
                      <p className="md:mb-6 mb-4 flex  gap-2">
                        <span className="shrink-0 relative top-1">
                          <Image
                            src={CircleInside}
                            width={20}
                            height={20}
                            alt="icon"
                          />
                        </span>
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
        <ButtonTag
          label={designServiceSectionData?.subRouteLink?.name || "Learn More"}
          href={designServiceSectionData?.subRouteLink?.href || "#"}
          icon={<ArrowRight />}
          variant="neutral"
        />
      </div>
    </Section>
  );
};

export default DesignServiceSection;
