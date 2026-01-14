import Section from "@/components/global/Section";
import { LabsFilLandingPageQuery } from "@/lib/codegen/graphql";
import Image from "next/image";

type LabsFilSecondSectionType = NonNullable<
  NonNullable<LabsFilLandingPageQuery["labsFilLandingPage"]>["secondSection"]
>;

const LabsFilSecondSection = ({
  secondSectionData,
}: {
  secondSectionData: LabsFilSecondSectionType;
}) => {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-3">
        <div className="p-8">
          {/* <div className="flex justify-end">
            {secondSectionData?.icon?.url && (
              <Image
                src={secondSectionData?.icon?.url}
                alt="Third section icon"
                width={40}
                height={40}
              />
            )}
          </div> */}
          <h3 className="flex flex-col w-4/5">
            <span className="text-display-sm text-accent-500">
              {secondSectionData?.heading?.split("|").at(0)}
            </span>
            <span className="text-heading-sm text-neutral-50">
              {secondSectionData?.heading?.split("|").at(1)}
            </span>
          </h3>
        </div>
        {secondSectionData?.cards &&
          secondSectionData?.cards.length > 0 &&
          secondSectionData?.cards?.map((card) => {
            return (
              <div
                className="p-8 flex flex-col justify-between gap-4 bg-neutral-800 rounded-xl min-h-[324px]"
                key={card?.id}
              >
                {/* <div  className="flex justify-end">
                  {card?.icon && (
                    <Image
                      src={card?.icon?.url}
                      alt={card?.icon?.alternativeText || "card-icon"}
                      width={40}
                      height={40}
                    />
                  )}
                </div> */}
                <h3 className="text-heading-xs text-neutral-50 mb-4 sm:mb-6">
                  {card?.heading}
                </h3>
                <p className="text-label-2xl text-neutral-200">
                  {card?.description}
                </p>
              </div>
            );
          })}
      </div>
    </Section>
  );
};

export default LabsFilSecondSection;
