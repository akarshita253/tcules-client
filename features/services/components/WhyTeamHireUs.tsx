import Section from "@/components/global/Section";
import { ServiceQuery } from "@/lib/codegen/graphql";
import Image from "next/image";

const WhyTeamHireUs = ({
  whyTeamHireSectionData,
}: {
  whyTeamHireSectionData: NonNullable<
    ServiceQuery["service"]
  >["whyTeamHireSection"];
}) => {
  return (
    <Section>
      <h2 className="text-heading-xs text-neutral-800 sm:mb-12 mb-6">
        {whyTeamHireSectionData?.heading}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {whyTeamHireSectionData?.whyHireUsCards?.map((singleCard) => {
          if (!singleCard) return null;
          return (
            <div
              className="p-4 sm:p-6 bg-neutral-100 rounded-xl min-h-[370px] relative"
              key={singleCard.id}
            >
              <div className="absolute top-6 right-6">
                {singleCard?.icon?.url && (
                  <Image
                    src={singleCard?.icon?.url}
                    width={singleCard?.icon?.width || 40}
                    height={singleCard?.icon?.height || 40}
                    alt={singleCard?.icon?.alternativeText || "icon"}
                  />
                )}
              </div>
              <h3 className="text-heading-2xs text-neutral-900 mb-8 md:mb-12 w-4/6">
                {singleCard.heading}
              </h3>
              <p className="text-label-md text-neutral-700 mb-4 sm:mb-6">
                {singleCard.description?.[0]?.children?.[0]?.text}
              </p>
              <p className="text-caption-lg uppercase bg-neutral-50 w-fit p-2 rounded-xl">
                {singleCard?.list?.at(0)?.listText}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default WhyTeamHireUs;
