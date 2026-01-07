import Section from "@/components/global/Section";
import { AboutQuery } from "@/lib/codegen/graphql";
import { cn } from "@/lib/utils";
import Image from "next/image";

const AboutSecondSection = ({
  secondSectionData,
}: {
  secondSectionData: NonNullable<AboutQuery["about"]>["secondSection"];
}) => {
  return (
    <Section>
      <h2 className="text-neutral-800 text-heading-xs mb-6">
        {secondSectionData?.heading}
      </h2>
      <p className="text-neutral-600 text-label-2xl">
        {secondSectionData?.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:grid-rows-8 gap-4 mt-6 sm:mt-12">
        {secondSectionData?.images &&
          secondSectionData?.images?.map((image, index) => {
            return (
              <div
                key={index}
                className={cn(
                  "w-full relative rounded-xl overflow-hidden h-[400px] lg:h-auto",
                  index === 0
                    ? "lg:col-span-3 lg:row-span-4"
                    : index === 1
                    ? "lg:col-span-2 lg:row-span-6 lg:col-start-4 lg:row-start-3 lg:h-[650px]"
                    : "lg:col-span-2 lg:row-span-4 lg:col-start-2 lg:row-start-5"
                )}
              >
                {image?.url && (
                  <Image
                    src={image?.url}
                    fill
                    alt={image?.alternativeText || "employee-image"}
                    className="object-cover"
                  />
                )}
              </div>
            );
          })}
      </div>
    </Section>
  );
};

export default AboutSecondSection;
