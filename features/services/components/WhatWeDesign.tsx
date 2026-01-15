"use client";

import Section from "@/components/global/Section";
import Image from "next/image";
import { ServiceQuery } from "@/lib/codegen/graphql";
import { useState } from "react";
import { BsBoundingBox } from "react-icons/bs";
import noise from "@/public/noise.png";

const WhatWeDesign = ({
  whatWeDesignSectionData,
}: {
  whatWeDesignSectionData: NonNullable<
    ServiceQuery["service"]
  >["whatWeDesignSection"];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCard = whatWeDesignSectionData?.whatWeDesignCards?.[activeIndex];

  return (
    <Section>
      <h2 className="text-heading-xs text-neutral-800 mb-6 sm:mb-12">
        {whatWeDesignSectionData?.heading}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 min-h-40 mb-6">
        {whatWeDesignSectionData?.whatWeDesignCards?.map(
          (singleCard, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={singleCard?.heading}
                onClick={() => setActiveIndex(index)}
                className={`
                p-6 rounded-xl cursor-pointer transition-all duration-300 relative overflow-hidden
                ${
                  isActive
                    ? "bg-linear-to-tr from-accent-50 via-accent-200 to-accent-300"
                    : "bg-neutral-100 hover:bg-linear-to-tr hover:from-accent-50 hover:via-accent-200 hover:to-accent-300"
                }
              `}
              >
                <div className="absolute inset-0 opacity-10">
                  <Image src={noise} alt="noise" className="bg-cover" />
                </div>
                <BsBoundingBox className="w-fit ml-auto mb-2" />
                <h3 className="text-heading-2xs text-neutral-900">
                  {singleCard?.heading}
                </h3>
              </div>
            );
          }
        )}
      </div>
      <div className="bg-neutral-100 rounded-xl grid grid-cols-1 sm:grid-cols-2 py-12 px-8 gap-x-6 gap-y-14 mb-4">
        {activeCard?.cardTiles?.map((tile) => (
          <div key={tile?.id}>
            <h4 className="text-heading-2xs text-neutral-900 mb-1">
              {tile?.heading}
            </h4>
            <p className="text-label-md text-neutral-700">
              {tile?.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center flex-wrap gap-8 py-6 px-8">
        <div>
          <h3 className="text-heading-xs text-neutral-900 mb-1">
            {whatWeDesignSectionData?.bottomDetails?.heading}
          </h3>
          <p className="text-label-xl text-neutral-700">
            {
              whatWeDesignSectionData?.bottomDetails?.description?.[0]
                ?.children?.[0]?.text
            }
          </p>
          <p className="text-label-xl text-neutral-700">
            {
              whatWeDesignSectionData?.bottomDetails?.description?.[1]
                ?.children?.[0]?.text
            }
          </p>
        </div>
        <div className="relative ">
          <Image
            src={whatWeDesignSectionData?.bottomDetails?.cardImage?.url || ""}
            alt="AI Fluent Process"
            width={100}
            height={100}
          />
        </div>
      </div>
    </Section>
  );
};

export default WhatWeDesign;
