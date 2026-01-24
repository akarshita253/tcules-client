import Section from "@/components/global/Section";
import ButtonTag from "@/components/shared/ButtonTag";
import { LabsFilLandingPageQuery } from "@/lib/codegen/graphql";
import { ArrowRight } from "lucide-react";

const LabsFilHeroSection = ({
  heroSectionData,
}: {
  heroSectionData: NonNullable<
    LabsFilLandingPageQuery["labsFilLandingPage"]
  >["heroSection"];
}) => {
  return (
    <Section>
      <h3 className="text-label-sm uppercase text-neutral-200 mb-4 sm:mb-6 text-center">
        {heroSectionData?.label}
      </h3>
      <h1 className="text-center lg:w-3/5 mx-auto mb-4 sm:mb-6">
        <span className="text-display-sm text-accent-500">
          {heroSectionData?.heading?.split("|")[0]}
        </span>
        <span className="text-heading-sm text-neutral-100">
          {heroSectionData?.heading?.split("|")[1]}
        </span>
      </h1>
      <p className="text-label-xl mt-6 lg:w-4/5 mx-auto text-center text-neutral-200 mb-6 sm:mb-12">
        {heroSectionData?.description}
      </p>
      <div className="mt-12 flex justify-center items-center gap-4 flex-wrap">
        {heroSectionData?.button?.map((button, index) => (
          <ButtonTag
            href={button?.href || "#"}
            label={button?.name || "Learn More"}
            key={index}
            icon={index === 1 ? <ArrowRight /> : null}
          />
        ))}
      </div>
    </Section>
  );
};

export default LabsFilHeroSection;
