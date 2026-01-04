import Section from "@/components/global/Section";
import { LabsFilLandingPageQuery } from "@/lib/codegen/graphql";
import LabsMarkdownContent from "./LabsMarkdownContent";
import { cn } from "@/lib/utils";
import CircleInside from "@/public/CircleInside.svg";
import Image from "next/image";

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
      <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-6 p-2 items-center">
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
        <div className="relative flex items-center gap-6">
          <div className="relative flex flex-col items-center">
            {/* Dashed line */}
            <div className="absolute top-0 bottom-0 w-px border-l border-dashed border-green-500/60" />

            {sixthSectionData?.rightCard &&
              sixthSectionData?.rightCard.map((_, index, array) => (
                <Image
                  src={CircleInside}
                  alt="CircleInside"
                  key={index}
                  className={cn(
                    "relative z-10",
                    index !== array.length - 1 && "mb-28"
                  )}
                />
              ))}
          </div>

          <div className="flex flex-col gap-12">
            {sixthSectionData?.rightCard &&
              sixthSectionData?.rightCard.map((singleCard, index) => (
                <div key={index}>
                  <h3 className="text-heading-xs font-semibold text-neutral-100">
                    {singleCard?.heading}
                  </h3>
                  <p className="mt-1 text-label-md text-neutral-400">
                    {singleCard?.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default LabsFilSixthSection;
