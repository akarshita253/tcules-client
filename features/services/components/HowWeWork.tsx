import Section from "@/components/global/Section";
import ButtonTag from "@/components/shared/ButtonTag";
import { ServiceQuery } from "@/lib/codegen/graphql";
import { ArrowRight } from "lucide-react";

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
              className="bg-neutral-100 p-3 rounded-full uppercase text-caption-lg"
              key={label?.id}
            >
              {label?.listText}
            </p>
          );
        })}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:mb-12 mb-6">
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
                        <ArrowRight
                          width={20}
                          height={20}
                          className="text-neutral-700"
                        />
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
      <div className="flex items-center justify-center">
        <ButtonTag
          label={howWeWorkSectionData?.link?.name || "Learn More"}
          href={howWeWorkSectionData?.link?.href || "#"}
          variant={"ghost"}
          icon={<ArrowRight />}
        />
      </div>
    </Section>
  );
};

export default HowWeWork;
