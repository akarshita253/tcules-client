import Section from "@/components/global/Section";
import { CareerQuery } from "@/lib/codegen/graphql";
import Image from "next/image";
import React from "react";

const CareerFourthSection = ({
  fourthSectionData,
}: {
  fourthSectionData: NonNullable<CareerQuery["career"]>["fourthSection"];
}) => {
  return (
    <Section>
      <div className="bg-neutral-50 p-2 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="bg-neutral-100p-8 rounded-xl flex flex-col justify-between gap-4">
          {fourthSectionData?.icon?.url && (
            <div className="flex justify-end">
              <Image
                src={fourthSectionData?.icon?.url ?? ""}
                width={40}
                height={40}
                alt={
                  fourthSectionData?.icon?.alternativeText ??
                  "Third section icon"
                }
              />
            </div>
          )}
          <div>
            <h2 className="text-heading-sm text-neutral-900">
              {fourthSectionData?.heading}
            </h2>
            <h2 className="text-display-xs text-accent-600">
              {fourthSectionData?.headingTwo}
            </h2>
          </div>
        </div>
        <div className="p-8 rounded-xl flex flex-col justify-between gap-4">
          <h3 className="text-heading-2xs text-neutral-900">
            {fourthSectionData?.rightSection?.heading}
          </h3>
          <div className="flex flex-col gap-6">
            {fourthSectionData?.rightSection?.rightSectionPoints &&
              fourthSectionData?.rightSection?.rightSectionPoints.length > 0 &&
              fourthSectionData?.rightSection?.rightSectionPoints?.map(
                (point) => {
                  return (
                    <div key={point?.id} className="flex items-center gap-2">
                      {point?.icon?.url && (
                        <div className="shrink-0">
                          <Image
                            src={point?.icon?.url ?? ""}
                            width={16}
                            height={16}
                            alt={
                              point?.icon?.alternativeText ??
                              "Third section icon"
                            }
                          /> 
                        </div>
                      )}
                      <p className="text-label-xl text-neutral-900">
                        {point?.points}
                      </p>
                    </div>
                  );
                }
              )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CareerFourthSection;
