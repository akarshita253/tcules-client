import Section from "@/components/global/Section";
import { CareerQuery } from "@/lib/codegen/graphql";
import Image from "next/image";

const CareerSecondSection = ({
  secondSectionData,
}: {
  secondSectionData: NonNullable<CareerQuery["career"]>["secondSection"];
}) => {
  return (
    <Section>
      <h2 className="sm:mb-12 mb-6">
        <span className="text-heading-md text-neutral-900">
          {secondSectionData?.heading?.split("|").at(0)}
        </span>{" "}
        <span className="text-display-sm text-accent-600">
          {secondSectionData?.heading?.split("|").at(1)}
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 p-2 bg-neutral-50 rounded-xl">
        {secondSectionData?.cardDetails &&
          secondSectionData?.cardDetails.map((singleCard) => {
            return (
              <div
                key={singleCard?.id}
                className="bg-neutral-100 rounded-xl p-6"
              >
                {singleCard?.icon?.url && (
                  <div className="mb-6 flex justify-end">
                    <Image
                      src={singleCard?.icon?.url}
                      width={40}
                      height={40}
                      alt={singleCard?.icon?.alternativeText || "icon"}
                    />
                  </div>
                )}
                <h3 className="text-heading-2xs text-neutral-900">
                  {singleCard?.heading}
                </h3>
              </div>
            );
          })}
      </div>
    </Section>
  );
};

export default CareerSecondSection;
