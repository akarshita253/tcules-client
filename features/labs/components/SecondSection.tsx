import Section from "@/components/global/Section";
import { LabSingleTypeQuery } from "@/lib/codegen/graphql";
import Image from "next/image";

type LabsCardSection = Extract<
  NonNullable<
    NonNullable<LabSingleTypeQuery["labSingleType"]>["detailSection"]
  >[number],
  { __typename: "ComponentLabsCardSection" }
>;

const SecondSection = ({ cardsData }: { cardsData?: LabsCardSection[] }) => {
  if (!cardsData) return null;

  const secondSectionData = cardsData?.[0];
  return (
    <Section>
      <h2 className="text-heading-xs  text-neutral-800 mb-6 sm:mb-12">
        {secondSectionData?.heading}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {secondSectionData?.cards &&
          secondSectionData?.cards?.map((singleCard) => {
            return (
              <div
                className="p-2 bg-neutral-100 rounded-xl flex justify-between flex-col gap-4"
                key={singleCard?.id}
              >
                <div className="p-6 relative">
                  <h3 className="text-heading-2xs text-neutral-800 w-4/5">{singleCard?.heading}</h3>
                  {singleCard?.icon?.url && (
                    <Image
                      src={singleCard?.icon?.url}
                      width={24}
                      height={24}
                      alt={singleCard?.icon?.alternativeText || "card-icon"}
                      className="absolute top-6 right-6"
                    />
                  )}
                </div>
                {singleCard?.cardImage?.url && (
                  <div className="w-full h-[215px] relative rounded-xl overflow-hidden">
                    <Image
                      src={singleCard?.cardImage?.url}
                      fill
                      alt={
                        singleCard?.cardImage?.alternativeText || "card-icon"
                      }
                    />
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </Section>
  );
};

export default SecondSection;
