import Section from "@/components/global/Section";
import ScrollReveal from "@/components/ui/scroll-change";
import { LabsFilLandingPageQuery } from "@/lib/codegen/graphql";
import Image from "next/image";

const LabsFilThirdSection = ({
  thirdSectionData,
}: {
  thirdSectionData: NonNullable<
    LabsFilLandingPageQuery["labsFilLandingPage"]
  >["thirdSection"];
}) => {
  return (
    <>
      <Section>
        <div className="relative">
          <h2 className="text-heading-lg max-w-full">
            <span className="text-accent-500">
              {thirdSectionData?.description?.split("|")[0]}
            </span>
              <ScrollReveal
                value={thirdSectionData?.description?.split("|")[1] || ""}
                initialColor="#909090"
                finalColor="#fff"
              />
          </h2>
          <div className="absolute bottom-0 right-0">
            {thirdSectionData?.icon?.url && (
              <Image
                src={thirdSectionData?.icon?.url}
                alt={thirdSectionData?.icon?.alternativeText || "icon"}
                width={106}
                height={106}
              />
            )}
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="text-heading-xs text-neutral-100 mb-6 sm:mb-12">
          {thirdSectionData?.heading}
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-3 gap-3">
          {thirdSectionData?.cards &&
            thirdSectionData?.cards.length > 0 &&
            thirdSectionData?.cards?.map((singleCard) => {
              return (
                <div
                  className=" bg-neutral-800 rounded-xl relative flex flex-col justify-between"
                  key={singleCard?.id}
                >
                  <div className="absolute top-6 right-6">
                    {singleCard?.icon?.url && (
                      <Image
                        src={singleCard?.icon?.url}
                        alt={singleCard?.icon?.alternativeText || "icon"}
                        width={26}
                        height={26}
                      />
                    )}
                  </div>
                  <h3 className="p-6 text-heading-2xs  text-neutral-50 w-4/5">
                    {singleCard?.heading}
                  </h3>
                  <p className="p-6 text-label-md text-neutral-200">
                    {singleCard?.heading}
                  </p>
                </div>
              );
            })}
        </div>
      </Section>
    </>
  );
};

export default LabsFilThirdSection;
