import Section from "@/components/global/Section";
import { ProgrammaticSeoPagesQuery } from "@/lib/codegen/graphql";
import Image from "next/image";
import React from "react";

const PseoSecondSection = ({
  secondSectionData,
}: {
  secondSectionData: NonNullable<
    ProgrammaticSeoPagesQuery["programmaticSeoPages"][number]
  >["secondSection"];
}) => {
  return (
    <Section>
      <h2 className="text-label-xl text-neutral-700 text-center mb-18">
        {secondSectionData?.heading}
      </h2>
      <div className="shadow-[0_4px_45.1px_0_rgba(0,0,0,0.03)] p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {secondSectionData?.cardImage &&
          secondSectionData?.cardImage?.map((singleImage) => {
            return (
              <div
                key={singleImage?.id}
                className="p-8 bg-neutral-100 rounded-lg flex justify-center items-center"
              >
                {singleImage?.file?.url && (
                  <Image
                    src={singleImage?.file?.url}
                    alt={singleImage?.file?.alternativeText || "company-logo"}
                    width={singleImage?.file?.width || 140}
                    height={singleImage?.file?.height || 28}
                  />
                )}
              </div>
            );
          })}
      </div>
    </Section>
  );
};

export default PseoSecondSection;
