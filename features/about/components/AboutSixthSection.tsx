import Section from "@/components/global/Section";
import { AboutQuery } from "@/lib/codegen/graphql";
import React from "react";

const AboutSixthSection = ({
  sixthSectionData,
}: {
  sixthSectionData: NonNullable<AboutQuery["about"]>["sixthSection"];
}) => {
  return (
    <Section>
      <div className="text-heading-sm text-neutral-800 mb-[72px]">
        <h2>{sixthSectionData?.heading?.split("|")[0]}</h2>
        <h2>{sixthSectionData?.heading?.split("|")[1]}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-12">
        {sixthSectionData?.sixthSectionCards &&
          sixthSectionData?.sixthSectionCards.map((singleCard) => (
            <div className="py-8 px-2" key={singleCard?.id}>
              <h3 className="text-heading-2xs text-neutral-900 mb-6">{singleCard?.heading}</h3>
              <p className="text-label-md text-neutral-800">
                {singleCard?.description}
              </p>
            </div>
          ))}
      </div>
    </Section>
  );
};

export default AboutSixthSection;
