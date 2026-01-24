import Section from "@/components/global/Section";
import ButtonTag from "@/components/shared/ButtonTag";
import { ProgrammaticSeoPagesQuery } from "@/lib/codegen/graphql";
import { ArrowRight } from "lucide-react";

const PseoFourthSection = ({
  fourthSectionData,
}: {
  fourthSectionData: NonNullable<
    ProgrammaticSeoPagesQuery["programmaticSeoPages"][number]
  >["fourthSection"];
}) => {
  return (
    <Section>
      <h2 className="text-heading-xs text-neutral-800 mb-6">
        {fourthSectionData?.heading}
      </h2>
      <p className="text-label-xl text-neutral-700 mb-12">
        {fourthSectionData?.description}
      </p>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {fourthSectionData?.cards &&
          fourthSectionData?.cards?.map(
            (singleCard: {
              id: string;
              heading: string;
              points: { id: string; listText: string }[];
              links: { href: string };
            }) => {
              return (
                <div
                  key={singleCard?.id}
                  className="p-8 rounded-xl bg-neutral-100 flex flex-col justify-between gap-2 min-h-[390px]"
                >
                  <div>
                    <h3 className="text-heading-2xs text-neutral-900 mb-12 w-4/5">
                      {singleCard?.heading}
                    </h3>
                    <div className="flex flex-col gap-6">
                      {singleCard?.points?.map((singlePoint) => {
                        return (
                          <p
                            className="text-label-md text-neutral-700 flex gap-2"
                            key={singlePoint?.id}
                          >
                            <span className="relative top-[5px]">
                              <ArrowRight size={14} />
                            </span>
                            <span>{singlePoint?.listText}</span>
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <ButtonTag
                      label={"Begin engagement"}
                      href={singleCard?.links?.href || "/contact-us"}
                      icon={<ArrowRight size={14} />}
                      variant={"ghost"}
                    />
                  </div>
                </div>
              );
            },
          )}
      </div>
    </Section>
  );
};

export default PseoFourthSection;
