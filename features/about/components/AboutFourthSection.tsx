import Section from "@/components/global/Section";
import { AboutQuery } from "@/lib/codegen/graphql";
import { cn } from "@/lib/utils";
import React from "react";

const AboutFourthSection = ({
  fourthSectionData,
}: {
  fourthSectionData: NonNullable<AboutQuery["about"]>["fourthSection"];
}) => {
  return (
    <Section>
      <h2 className="mb-[72px] text-label-xs text-neutral-600 text-center">
        {fourthSectionData?.label}
      </h2>
      <div className="">
        {fourthSectionData?.accordianDetails &&
          fourthSectionData?.accordianDetails.length > 0 &&
          fourthSectionData?.accordianDetails?.map((singleAccordian, index) => {
            return (
              <h3
                className={cn(
                  " text-neutral-900 font-medium text-center border-b border-neutral-300",
                  index === 0 ? "pb-9" : "py-9"
                )}
                key={singleAccordian?.id}
              >
                <span className="text-heading-xs">
                  {singleAccordian?.heading}
                </span>
              </h3>
            );
          })}
      </div>
    </Section>
  );
};

export default AboutFourthSection;
