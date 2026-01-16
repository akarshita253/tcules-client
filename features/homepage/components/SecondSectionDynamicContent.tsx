"use client";

import { HomepageQuery } from "@/lib/codegen/graphql";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SecondSectionDynamicContent = ({
  secondSectionData,
}: {
  secondSectionData: NonNullable<HomepageQuery["homepage"]>["secondSection"];
}) => {
  const [index, setIndex] = useState(0);

  const handleHoverState = (index: number) => () => {
    setIndex(index);
  };

  return (
    <>
      <div className="pl-4 flex flex-col justify-center h-full">
        {secondSectionData?.secondSection &&
          secondSectionData?.secondSection.map((singleSection, index) => {
            return (
              <div
                key={singleSection?.id}
                className="w-3xs flex justify-between items-center z-20 group gap-8 hover:bg-neutral-900/70 cursor-pointer  rounded-sm px-4 py-2 transition-all"
              >
                <h3
                  className="text-label-3xs text-neutral-500 group-hover:text-neutral-50 uppercase "
                  onMouseEnter={handleHoverState(index)}
                >
                  {singleSection?.heading}
                </h3>
                <ArrowRight
                  size={16}
                  className="group-hover:text-neutral-50 hidden group-hover:block"
                />
              </div>
            );
          })}
      </div>
      {secondSectionData?.secondSection &&
        secondSectionData?.secondSection[index]?.bgImage?.url && (
          <div className="absolute inset-0">
              <Image
                src={secondSectionData?.secondSection[index]?.bgImage?.url}
                alt={
                  secondSectionData?.secondSection[index]?.bgImage
                    ?.alternativeText || "text"
                }
                fill
                className="object-cover"
              />
          </div>
        )}
      {secondSectionData?.secondSection &&
        secondSectionData?.secondSection[index]?.image?.url && (
          <div className="absolute top-8 right-8 lg:block hidden">
            <div className="relative w-[324px] h-[196px]  rounded-lg overflow-hidden">
              <Image
                src={secondSectionData?.secondSection[index]?.image?.url}
                alt={
                  secondSectionData?.secondSection[index]?.image
                    ?.alternativeText || "text"
                }
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}
      {secondSectionData?.secondSection && (
        <div className="bg-neutral-50 rounded-xl hidden lg:inline-block absolute bottom-8 p-6 md:right-32 max-w-[400px]">
          <Link
            href={
              `case-studies/${secondSectionData?.secondSection[index]?.link?.case_study?.slug}` ||
              "#"
            }
            className="text-heading-xs text-neutral-900"
          >
            {secondSectionData?.secondSection[index]?.link?.case_study?.title}
            {secondSectionData?.secondSection[index]?.link?.botomImage?.url && (
              <div className="mt-6 flex justify-between items-center">
                <Image
                  src={
                    secondSectionData?.secondSection[index]?.link?.botomImage
                      ?.url
                  }
                  width={
                    secondSectionData?.secondSection[index]?.link?.botomImage
                      ?.width || 100
                  }
                  height={
                    secondSectionData?.secondSection[index]?.link?.botomImage
                      ?.height || 30
                  }
                  alt={
                    secondSectionData?.secondSection[index]?.link?.botomImage
                      ?.url || "text"
                  }
                  className="object-cover"
                />
                <ArrowRight size={16} />
              </div>
            )}
          </Link>
        </div>
      )}
    </>
  );
};

export default SecondSectionDynamicContent;
