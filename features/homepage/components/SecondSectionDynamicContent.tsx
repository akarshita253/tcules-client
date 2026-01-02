"use client";

import { Block } from "@/components/global/Block";
import { Container } from "@/components/global/Container";
import { HomepageQuery } from "@/lib/codegen/graphql";
import Image from "next/image";
import { useState } from "react";
import { CgArrowTopRight } from "react-icons/cg";

const SecondSectionDynamicContent = ({
  secondSectionData,
}: {
  secondSectionData: NonNullable<HomepageQuery["homepage"]>["secondSection"];
}) => {
  const [index, setIndex] = useState(0);
  console.log(index, "this is index");
  return (
    <>
      <Container className="md:grid grid-cols-12 gap-6 relative z-20 h-full">
        <Block className="lg:col-start-2 col-start-1 lg:col-end-12 col-end-13 absolute inset-0">
          <div className="sm:absolute top-0 bottom-0 sm:my-auto flex flex-col gap-4 justify-center h-full">
            {secondSectionData?.secondSection &&
              secondSectionData?.secondSection.map((singleSection, index) => {
                return (
                  <div
                    key={singleSection?.id}
                    className="min-w-3xs flex justify-between group gap-8 hover:bg-neutral-100/50 cursor-pointer  rounded-lg px-4 py-2 transition-all"
                  >
                    <h3
                      className="text-label-3xs text-neutral-50 uppercase "
                      onClick={() => setIndex(index)}
                    >
                      {singleSection?.heading}
                    </h3>
                    <CgArrowTopRight className="text-neutral-50 hidden group-hover:block" />
                  </div>
                );
              })}
          </div>
        </Block>
        <p className="absolute top-8 sm:right-8 text-label-md text-neutral-50 max-w-96">
          {secondSectionData?.secondSection &&
            secondSectionData?.secondSection[index]?.topDescription}
        </p>
        {secondSectionData?.secondSection &&
          secondSectionData?.secondSection[index]?.image?.url && (
            <div className="absolute right-8 top-32 sm:top-40">
              <div className="relative w-[284px] h-[350px] md:w-[324px] md:h-[400px] rounded-xl overflow-hidden">
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
      </Container>
      <h3 className="text-heading-xs absolute px-4 md:px-0 bottom-4 md:bottom-20 lg:left-0 lg:right-0 lg:mx-auto left-8 max-w-[400px] text-neutral-50 z-20">
        {secondSectionData?.secondSection &&
          secondSectionData?.secondSection[index]?.description}
      </h3>
    </>
  );
};

export default SecondSectionDynamicContent;
