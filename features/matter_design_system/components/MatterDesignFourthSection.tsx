import Section from "@/components/global/Section";
import { MatterDesignSystemQuery } from "@/lib/codegen/graphql";
import Image from "next/image";
import React from "react";

const MatterDesignFourthSection = ({
  fourthSectionData,
}: {
  fourthSectionData: NonNullable<
    MatterDesignSystemQuery["matterDesignSystem"]
  >["fourthSection"];
}) => {
  return (
    <Section className="">
      <div className="bg-neutral-800 p-3 rounded-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {fourthSectionData?.displayCards &&
            fourthSectionData?.displayCards.length > 0 &&
            fourthSectionData?.displayCards?.map((singleCard) => {
              return (
                <div
                  key={singleCard?.id}
                  className="flex flex-col justify-between bg-neutral-900 p-8 rounded-xl gap-3"
                >
                  <div className="flex justify-end">
                    {singleCard?.icon?.url && (
                      <Image
                        src={singleCard?.icon?.url}
                        width={singleCard?.icon?.width || 40}
                        height={singleCard?.icon?.height || 40}
                        alt="icon"
                      />
                    )}
                  </div>
                  {singleCard?.images &&
                    singleCard?.images.map((singleImage, index) => {
                      if (!singleImage?.url) return null;
                      return (
                        <Image
                          key={index}
                          src={singleImage?.url}
                          width={singleImage?.width || 80}
                          height={singleImage?.height || 60}
                          alt={singleImage?.alternativeText || "image"}
                        />
                      );
                    })}
                  {singleCard?.heading && (
                    <>
                      <h3 className="text-display-sm text-accent-500">
                        {singleCard?.heading?.split("|").at(0)}
                      </h3>
                      <h3 className="text-heading-md text-neutral-50">
                        {singleCard?.heading?.split("|").at(1)}
                      </h3>
                    </>
                  )}
                  {singleCard?.d && (
                    <p className="text-label-3xl text-neutral-200 mt-4">
                      {singleCard?.d}
                    </p>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </Section>
  );
};

export default MatterDesignFourthSection;
