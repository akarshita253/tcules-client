import Section from "@/components/global/Section";
import { CaseStudyLandingPageQuery, ServiceQuery } from "@/lib/codegen/graphql";
import ButtonTag from "./ButtonTag";

const Miscellaneous = ({
  miscSectionData,
}: {
  miscSectionData: NonNullable<ServiceQuery["service"]>["miscSection"] | NonNullable<CaseStudyLandingPageQuery["caseStudyLandingPage"]>["misc"];
}) => {
  return (
    <Section>
      <div className="text-center sm:w-4/5 mx-auto space-y-3 mb-9">
        <p className="text-label-2xs text-neutral-600">
          {miscSectionData?.label}
        </p>
        <h2 className="text-heading-sm text-neutral-800">
          {miscSectionData?.heading}
        </h2>
        <p className="text-neutral-800 text-label-xl">
          {miscSectionData?.description}
        </p>
      </div>
      <div className="flex justify-center items-center">
        <ButtonTag label={miscSectionData?.button?.name || "See how we work"} href={miscSectionData?.button?.href || "#"} variant={"secondary"}/>
      </div>
    </Section>
  );
};

export default Miscellaneous;
