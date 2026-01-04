"use client";

import Section from "@/components/global/Section";
import { LabsFilLandingPageQuery } from "@/lib/codegen/graphql";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const LabsFilSeventhSection = ({
  seventhSectionData,
}: {
  seventhSectionData: NonNullable<
    LabsFilLandingPageQuery["labsFilLandingPage"]
  >["seventhSection"];
}) => {
  const [accordianState, setAccordianState] = useState(false);
  const [accordianIndex, setAccordianIndex] = useState(0);

  const handleAccordian = (index: number) => {
  if (accordianIndex === index) {
    setAccordianState((prev) => !prev);
  } else {
    setAccordianIndex(index);
    setAccordianState(true);
  }
};

  return (
    <Section className="flex flex-col gap-6 sm:gap-12">
      <div>
        <h2 className=" mb-3">
          <span className="text-accent-500 text-display-xs">
            {seventhSectionData?.heading?.split("|")[0]}
          </span>
          <span className="text-neutral-100 text-heading-sm">
            {seventhSectionData?.heading?.split("|")[1]}
          </span>
          {seventhSectionData?.heading}
        </h2>
        <p className="text-label-md text-neutral-200">
          {seventhSectionData?.description}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {seventhSectionData?.faqs &&
          seventhSectionData?.faqs.length > 0 &&
          seventhSectionData?.faqs.map((singleFaq, index) => {
            return (
              <div
                key={index}
                className="rounded-xl bg-neutral-800 p-4  sm:p-6"
              >
                <div
                  className="flex items-center justify-between gap-2 cursor-pointer"
                  onClick={() => handleAccordian(index)}
                >
                  <p className="text-heading-2xs text-neutral-300">
                    {singleFaq?.question}
                  </p>
                  <ChevronUp
                    className={cn(
                      accordianState && accordianIndex === index
                        ? "rotate-180"
                        : "rotate-0",
                      "transition-all duration-300 ease-in-out text-neutral-200"
                    )}
                  />
                </div>
                <div
                  className={cn(
                    accordianState && accordianIndex === index
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0",
                    "grid transition-all duration-300 ease-in-out"
                  )}
                >
                  <p className="overflow-hidden text-label-md text-neutral-300">
                    {singleFaq?.answer}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
      <div>
        <h3 className=" text-heading-xs text-neutral-300 text-center mb-3">
          Still got questions?
        </h3>
        <p className="text-label-xl flex items-center justify-center gap-2">
          <span className="text-neutral-300">Drop us a note</span>
          <span>
            <ArrowRight className="text-neutral-300" />
          </span>
          <Link
            href="mailto:fil@tcules.com"
            className="text-accent-600 hover:underline"
          >
            fil@tcules.com
          </Link>
        </p>
      </div>
    </Section>
  );
};

export default LabsFilSeventhSection;
