import Section from "@/components/global/Section";
import { Button } from "@/components/ui/button";
import { CaseStudyLandingPageQuery } from "@/lib/codegen/graphql";

const CaseStudyListingHeroSec = ({heroSectionData}: {heroSectionData: NonNullable<CaseStudyLandingPageQuery["caseStudyLandingPage"]>["heroSection"]}) => {
  return (
    <Section>
      <h1 className="text-center lg:w-3/5 mx-auto flex gap-4 justify-center items-baseline">
        <span className="text-display-sm text-accent-600">
          {heroSectionData?.heading?.split(",")[0]}
        </span>
        <span className="text-heading-md text-neutral-800">
          {heroSectionData?.heading?.split(",")[1]}
        </span>
      </h1>
      <p className="text-label-xl mt-6 lg:w-4/5 mx-auto text-center text-neutral-700 mb-16">
        {heroSectionData?.description}
      </p>
      <div className="flex items-center justify-center">
        <Button className="bg-neutral-100">{heroSectionData?.button?.name}</Button>
      </div>
    </Section>
  );
};

export default CaseStudyListingHeroSec;
