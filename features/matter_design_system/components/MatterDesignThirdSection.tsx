import Section from "@/components/global/Section";
import { MatterDesignSystemQuery } from "@/lib/codegen/graphql";
import Image from "next/image";

const MatterDesignThirdSection = ({
  thirdSectionData,
}: {
  thirdSectionData: NonNullable<
    MatterDesignSystemQuery["matterDesignSystem"]
  >["thirdSection"];
}) => {
  return (
    <Section>
      <h2 className="text-heading-sm text-neutral-50 mb-6 sm:mb-12">
        {thirdSectionData?.heading}
      </h2>
      <div className="flex flex-col justify-between gap-14 md:gap-[84px]">
        {thirdSectionData?.cards?.map((singleCard, index) => {
          const isEven = (index + 1) % 2 === 0;

          return (
            <div
              key={singleCard?.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Image */}
              <div
                className={`
          rounded-xl relative w-full h-[375px] overflow-hidden
          order-1
          ${isEven ? "md:order-2" : "md:order-1"}
        `}
              >
                {singleCard?.cardImage?.url && (
                  <Image
                    src={singleCard.cardImage.url}
                    fill
                    alt="card-icon"
                    className="object-cover"
                  />
                )}
              </div>

              <div
                className={`
          flex flex-col justify-center gap-12
          order-2
          ${isEven ? "md:order-1" : "md:order-2"}
        `}
              >
                <h3 className="text-heading-xs text-neutral-50">
                  {singleCard?.heading}
                </h3>
                <p className="text-label-md text-neutral-200">
                  {singleCard?.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default MatterDesignThirdSection;
