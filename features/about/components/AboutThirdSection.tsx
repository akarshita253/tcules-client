import Section from "@/components/global/Section";
import { AboutQuery } from "@/lib/codegen/graphql";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const AboutThirdSection = ({
  thirdSectionData,
}: {
  thirdSectionData: NonNullable<AboutQuery["about"]>["thirdSection"];
}) => {
  return (
    <Section>
      <h2 className="text-neutral-800 text-heading-xs mb-6">
        {thirdSectionData?.heading}
      </h2>
      <p className="text-neutral-600 text-label-2xl">
        {thirdSectionData?.description}
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3 lg:grid-cols-7 mt-6 sm:mt-12">
        {thirdSectionData?.images &&
          thirdSectionData?.images?.map((image, index) => {
            return (
              <div
                key={index}
                className={cn(
                  "w-full h-[312px] relative rounded-xl overflow-hidden",
                  index === 2 || index === 3 ? "lg:col-span-3" : "lg:col-span-2"
                )}
              >
                {image?.url && (
                  <Image
                    src={image?.url}
                    fill
                    alt={image?.alternativeText || "employee-image"}
                    className="object-cover"
                  />
                )}
              </div>
            );
          })}
      </div>
    </Section>
  );
};

export default AboutThirdSection;
