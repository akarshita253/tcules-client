import Section from "@/components/global/Section";
import { buttonVariants } from "@/components/ui/button";
import { CareerQuery } from "@/lib/codegen/graphql";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CareerFourthSection = ({
  fourthSectionData,
}: {
  fourthSectionData: NonNullable<CareerQuery["career"]>["fourthSection"];
}) => {
  return (
    <>
      <Section>
        <div className="bg-neutral-900 p-2 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="p-8 flex flex-col gap-4 justify-between">
            {fourthSectionData?.icon?.url && (
              <div className="flex justify-end">
                <Image
                  src={fourthSectionData?.icon?.url}
                  width={fourthSectionData?.icon?.width || 95}
                  height={fourthSectionData?.icon?.height || 95}
                  alt={fourthSectionData?.icon?.alternativeText || "icon"}
                />
              </div>
            )}
            <h3 className="flex flex-col mb-9">
              <span className="text-display-xs text-neutral-500">
                {fourthSectionData?.heading?.split("|").at(0)}
              </span>
              <span className="text-heading-sm text-neutral-50">
                {fourthSectionData?.heading?.split("|").at(1)}
              </span>
            </h3>
            <div>
              <Link
                className={cn(buttonVariants({ variant: "default" }))}
                href={fourthSectionData?.link?.href || "#"}
              >
                {fourthSectionData?.link?.name}
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {fourthSectionData?.cards &&
              fourthSectionData?.cards.length > 0 &&
              fourthSectionData?.cards?.map((singleCard, index) => {
                return (
                  <div
                    className={`${
                      index !== 2 ? " col-span-1" : "col-span-2"
                    } bg-neutral-800 p-6 flex flex-col justify-between gap-4 rounded-xl`}
                    key={singleCard?.id}
                  >
                    {singleCard?.icon?.url && (
                      <div className="flex justify-end">
                        <Image
                          src={singleCard?.icon?.url}
                          width={singleCard?.icon?.width || 40}
                          height={singleCard?.icon?.height || 40}
                          alt={singleCard?.icon?.alternativeText || "icon"}
                        />
                      </div>
                    )}
                    <h3 className="text-heading-xs text-neutral-50">
                      {singleCard?.heading}
                    </h3>
                  </div>
                );
              })}
          </div>
        </div>
      </Section>
      <Section className="sm:py-[120px] border-y border-neutral-200">
        <h2 className="text-heading-xs text-neutral-800 mb-6 text-center sm:mb-9">{fourthSectionData?.bottomHeading}</h2>
        <div className="flex justify-center items-center">
          <Link
            className={cn(buttonVariants({ variant: "default" }),"bg-neutral-900 text-neutral-50")}
            href={fourthSectionData?.bottomLink?.href || "#"}
          >
            {fourthSectionData?.bottomLink?.name}
          </Link>
        </div>
      </Section>
    </>
  );
};

export default CareerFourthSection;
