import Section from "@/components/global/Section";
import { MatterDesignSystemQuery } from "@/lib/codegen/graphql";
import Image from "next/image";

const MatterDesignFifthSection = ({
  fifthSectionData,
}: {
  fifthSectionData: NonNullable<
    MatterDesignSystemQuery["matterDesignSystem"]
  >["fifthSection"];
}) => {
  return (
    <Section>
      <h2>{fifthSectionData?.heading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fifthSectionData?.cards &&
          fifthSectionData?.cards.map((singleCard) => {
            return (
              <div
                className="bg-neutral-800 rounded-xl relative "
                key={singleCard?.id}
              >
                {singleCard?.icon?.url && (
                  <div className="absolute top-6 right-6">
                    <Image
                      src={singleCard?.icon?.url}
                      width={singleCard?.icon?.width || 40}
                      height={singleCard?.icon?.height || 40}
                      alt="icon"
                    />
                  </div>
                )}
                <h3 className="text-heading-2xs p-6 text-neutral-50">
                  {singleCard?.heading}
                </h3>
                <p className="text-label-md p-6 text-neutral-200">
                  {singleCard?.description}
                </p>
              </div>
            );
          })}
      </div>
    </Section>
  );
};

export default MatterDesignFifthSection;
