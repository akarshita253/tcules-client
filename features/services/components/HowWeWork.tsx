import Section from "@/components/global/Section";
import { ServiceQuery } from "@/lib/codegen/graphql";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HowWeWork = ({
  howWeWorkSectionData,
}: {
  howWeWorkSectionData: NonNullable<
    ServiceQuery["service"]
  >["howWeWorkSection"];
}) => {
  return (
    <Section>
      <h2 className="text-heading-xs text-neutral-800 mb-6 sm:mb-12">
        {howWeWorkSectionData?.heading}
      </h2>
      <div className="flex items-center flex-wrap gap-6 mb-4 sm:mb-6">
        {howWeWorkSectionData?.labels?.map((label) => {
          return (
            <p
              className="bg-neutral-100 p-3 rounded-xl uppercase text-caption-lg"
              key={label?.id}
            >
              {label?.listText}
            </p>
          );
        })}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:mb-6 mb-4">
        {howWeWorkSectionData?.howWeWorkCards?.map((singleCard) => {
          return (
            <div
              className="p-4 sm:p-6 bg-neutral-100 rounded-xl"
              key={singleCard?.id}
            >
              <h3 className="text-heading-2xs text-neutral-900 mb-8 md:mb-12 w-4/5">
                {singleCard?.heading}
              </h3>
              <div>
                {singleCard?.cardTiles?.map((singleTile) => {
                  return (
                    <div
                      key={singleTile?.id}
                      className="flex items-start  gap-2"
                    >
                      <span className="shrink-0 relative top-1">
                        <ArrowRight width={20} height={20} className="text-neutral-700"/>
                      </span>

                      <p className="sm:mb-6 mb-4">
                        <span className="text-label-md text-neutral-700">
                          {singleTile?.heading}
                        </span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <p className="text-label-3xs text-neutral-900 text-center uppercase flex items-center gap-3 justify-center">
          <Link href={howWeWorkSectionData?.link?.href || "#"}>
            {howWeWorkSectionData?.link?.name}
          </Link>
          <ArrowRight size={16} />
        </p>
      </div>
    </Section>
  );
};

export default HowWeWork;
