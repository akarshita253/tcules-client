import Section from "@/components/global/Section";
import { CareerQuery } from "@/lib/codegen/graphql";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const CareerThirdSection = ({
  thirdSectionData,
}: {
  thirdSectionData: NonNullable<CareerQuery["career"]>["thirdSection"];
}) => {
  return (
    <Section>
      <h2 className="mb-4">
        <span className="text-heading-md text-neutral-900">
          {thirdSectionData?.heading?.split("|").at(0)}
        </span>{" "}
        <span className="text-display-sm text-accent-600">
          {thirdSectionData?.heading?.split("|").at(1)}
        </span>
      </h2>
      <p className="text-label-xl text-neutral-800 mb-6 sm:mb-12">
        {thirdSectionData?.description}
      </p>

      <div className="flex flex-col gap-6">
        {thirdSectionData?.openings &&
          thirdSectionData?.openings.length > 0 &&
          thirdSectionData?.openings?.map((opening, index) => (
            <div
              key={index}
              className="grid grid-cols-4 gap-2 items-center py-6 border-b border-neutral-200 px-1"
            >
              <h4 className="text-heading-2xs text-neutral-800">
                {opening?.roleName}
              </h4>
              <p className="text-label-md text-neutral-800 text-center">
                {opening?.roleDomain}
              </p>
              <p className="text-label-md text-neutral-800 text-center">
                {opening?.roleLocation}
              </p>
              <div className="flex justify-end">
                <Link
                  target={opening?.link?.isExternal ? "_blank" : undefined}
                  href={opening?.link?.href || "#"}
                  className="flex gap-2 text-label-3xs items-center w-fit py-3 px-4 rounded-lg hover:bg-neutral-900 hover:text-neutral-50 transition-all"
                >
                  {opening?.link?.name}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </Section>
  );
};

export default CareerThirdSection;
