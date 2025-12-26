import Section from "@/components/global/Section";
import Image from "next/image";
import { ServiceQuery } from "@/lib/codegen/graphql";

const OperatingPhilosophy = ({
  operatingPhilosophySectionData,
}: {
  operatingPhilosophySectionData: NonNullable<
    ServiceQuery["service"]
  >["operatingPhilosophySection"];
}) => {
  return (
    <Section>
      <h2 className="text-heading-xs text-neutral-800 sm:mb-12 mb-6">
        {operatingPhilosophySectionData?.heading}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {operatingPhilosophySectionData?.operatingPhilosophyCards?.map(
          (singleCard) => {
            return (
              <div
                className="relative rounded-xl h-[270px] overflow-hidden"
                key={singleCard?.id}
              >
                {singleCard?.cardImage?.url}
                <Image
                  src={singleCard?.cardImage?.url || ""}
                  alt={
                    singleCard?.cardImage?.alternativeText || "Service Image"
                  }
                  fill
                  className="object-cover"
                />
                <div className="p-4 sm:p-6 absolute bottom-0 left-0">
                  <h3 className="text-heading-2xs text-neutral-50">
                    {singleCard?.heading}
                  </h3>
                  <p className="text-label-xs text-neutral-200">
                    {singleCard?.description?.[0]?.children?.[0]?.text}
                  </p>
                </div>
              </div>
            );
          }
        )}
      </div>
    </Section>
  );
};

export default OperatingPhilosophy;
