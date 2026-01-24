import Section from "@/components/global/Section";
import ButtonTag from "@/components/shared/ButtonTag";
import { ProgrammaticSeoPagesQuery } from "@/lib/codegen/graphql";
import Image from "next/image";

const PseoSixthSection = ({
  sixthSectionData,
}: {
  sixthSectionData: NonNullable<
    ProgrammaticSeoPagesQuery["programmaticSeoPages"][number]
  >["sixthSection"];
}) => {
  return (
    <Section>
      <h2 className="text-heading-xs text-neutral-800 mb-12">
        {sixthSectionData?.heading}
      </h2>
      {sixthSectionData?.featureImage?.url && (
        <div className="mb-12">
          <Image
            src={sixthSectionData?.featureImage?.url}
            width={sixthSectionData?.featureImage?.width || 1116}
            height={sixthSectionData?.featureImage?.height || 550}
            alt={
              sixthSectionData?.featureImage?.alternativeText || "feature image"
            }
          />
        </div>
      )}
      <div className="flex justify-center items-center">
        <ButtonTag
          label={sixthSectionData?.link?.name || "Learn More"}
          href={sixthSectionData?.link?.href || "#"}
          variant={"secondary"}
        />
      </div>
    </Section>
  );
};

export default PseoSixthSection;
