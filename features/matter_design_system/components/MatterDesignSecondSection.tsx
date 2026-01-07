import Section from "@/components/global/Section";
import { MatterDesignSystemQuery } from "@/lib/codegen/graphql";
import Image from "next/image";
import React from "react";

const MatterDesignSecondSection = ({
  secondSectionData,
}: {
  secondSectionData: NonNullable<
    MatterDesignSystemQuery["matterDesignSystem"]
  >["secondSection"];
}) => {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-neutral-800 rounded-xl p-8 relative">
        {secondSectionData?.icon?.url && (
          <div className="flex justify-end mb-4">
            <Image
              src={secondSectionData?.icon?.url}
              width={secondSectionData?.icon?.width || 40}
              height={secondSectionData?.icon?.height || 40}
              alt="icon"
            />
          </div>
        )}
        <h3 className="text-heading-md text-neutral-50 w-4/5">
          {secondSectionData?.heading}
        </h3>
      </div>
      {secondSectionData?.cardDetails &&
        secondSectionData?.cardDetails.map((singleCard) => {
          return (
            <div
              className="bg-neutral-800 rounded-xl p-8 relative "
              key={singleCard?.id}
            >
              {secondSectionData?.icon?.url && (
                <div className="flex justify-end mb-6">
                  <Image
                    src={secondSectionData?.icon?.url}
                    width={secondSectionData?.icon?.width || 40}
                    height={secondSectionData?.icon?.height || 40}
                    alt="icon"
                  />
                </div>
              )}
              <h3 className="text-heading-xs text-neutral-50 w-4/5 mb-6">
                {secondSectionData?.heading}
              </h3>
              <p className="text-label-3xl text-neutral-200">
                {singleCard?.description}
              </p>
            </div>
          );
        })}
    </Section>
  );
};

export default MatterDesignSecondSection;
