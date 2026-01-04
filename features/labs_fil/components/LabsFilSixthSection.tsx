import Section from "@/components/global/Section";
import { LabsFilLandingPageQuery } from "@/lib/codegen/graphql";
import LabsMarkdownContent from "./LabsMarkdownContent";

const LabsFilSixthSection = ({
  sixthSectionData,
}: {
  sixthSectionData: NonNullable<
    LabsFilLandingPageQuery["labsFilLandingPage"]
  >["sixthSection"];
}) => {
  return (
    <Section>
      <h2 className="text-neutral-100 text-heading-xs mb-3">
        {sixthSectionData?.heading}
      </h2>
      <p className="text-label-md text-neutral-200 mb-6 sm:mb-12">
        {sixthSectionData?.description}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2 items-center">
        <div className="bg-neutral-800 rounded-xl p-6 flex flex-col gap-6 sm:gap-12">
          <h3 className="text-neutral-50 text-heading-xs">
            {sixthSectionData?.leftCard?.heading}
          </h3>
          <div>
            <LabsMarkdownContent
              content={sixthSectionData?.leftCard?.description}
            />
          </div>
          <p className="text-label-sm text-accent-600">
            {sixthSectionData?.leftCard?.bottomText}
          </p>
        </div>
        <div className="flex flex-col gap-6 p-6 pl-16">
            {sixthSectionData?.rightCard && sixthSectionData?.rightCard.length > 0 && sixthSectionData?.rightCard.map((singleCard) => (
                <div key={singleCard?.id}>
                    <h3 className="text-neutral-100 text-heading-xs">
                        {singleCard?.heading}
                    </h3>
                    <p className="text-label-md text-neutral-400">
                        {singleCard?.description}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default LabsFilSixthSection;
