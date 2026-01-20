import Section from "@/components/global/Section";
import { ProgrammaticSeoPagesQuery } from "@/lib/codegen/graphql";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
          fourthSectionData?.cards?.map((singleCard) => {
            return (
              <div
                key={singleCard?.id}
                className="p-8 rounded-xl bg-neutral-100 flex flex-col justify-between gap-2 min-h-[390px]"
              >
                <div>
                  <h3 className="text-heading-2xs text-neutral-900 mb-12 w-4/5">
                    {singleCard?.heading}
                  </h3>
                  <div>
                    {singleCard?.points?.map((singlePoint) => {
                      return (
                        <p key={singlePoint?.id}>
                          <span>{singlePoint?.listText}</span>
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <Link
                    href={singleCard?.links?.href || "#"}
                    className="flex items-center gap-2"
                  >
                    <span className="uppercase text-label-3xs text-neutral-900 ">{singleCard?.links?.name}</span>
                    <span>
                      <ArrowRight size={14}/>
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </Section>
  );
};

export default PseoFourthSection;
