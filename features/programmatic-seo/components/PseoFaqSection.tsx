"use client";

import Section from "@/components/global/Section";
import { ProgrammaticSeoPagesQuery } from "@/lib/codegen/graphql";
import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";
import { useState } from "react";

const PseoFaqSection = ({
  faqData,
}: {
  faqData: NonNullable<
    ProgrammaticSeoPagesQuery["programmaticSeoPages"][number]
  >["faqSection"];
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
    <Section>
      <h2 className="text-heading-xs text-neutral-800 mb-12">
        {faqData?.heading}
      </h2>
      <div className="flex flex-col gap-4">
        {faqData?.faqs &&
          faqData?.faqs.length > 0 &&
          faqData?.faqs.map((singleFaq, index) => {
            return (
              <div
                key={index}
                className="rounded-xl bg-neutral-100 p-4  sm:p-6"
              >
                <div
                  className="flex items-center justify-between gap-2 cursor-pointer"
                  onClick={() => handleAccordian(index)}
                >
                  <p className="text-heading-2xs text-neutral-800">
                    {singleFaq?.question}
                  </p>
                  <ChevronUp
                    className={cn(
                      accordianState && accordianIndex === index
                        ? "rotate-180"
                        : "rotate-0",
                      "transition-all duration-300 ease-in-out text-neutral-800",
                    )}
                  />
                </div>
                <div
                  className={cn(
                    accordianState && accordianIndex === index
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0",
                    "grid transition-all duration-300 ease-in-out",
                  )}
                >
                  <p className="overflow-hidden text-label-md text-neutral-800">
                    {singleFaq?.answer}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </Section>
  );
};

export default PseoFaqSection;
