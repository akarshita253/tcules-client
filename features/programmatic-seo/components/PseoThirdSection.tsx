import Section from "@/components/global/Section";
import { ProgrammaticSeoPagesQuery } from "@/lib/codegen/graphql";
import Image from "next/image";
import ecilips from "@/public/bulletcir.png";
import arrow from "@/public/white-arrow.svg";
import ButtonTag from "@/components/shared/ButtonTag";

const PseoThirdSection = ({
  thirdSectionData,
}: {
  thirdSectionData: NonNullable<
    ProgrammaticSeoPagesQuery["programmaticSeoPages"][0]
  >["thirdSection"];
}) => {
  return (
    <Section>
      <h2 className="text-heading-xs text-neutral-800 mb-6">
        {thirdSectionData?.headingTop}
      </h2>
      <p className="text-label-xl text-neutral-700 mb-12">
        {thirdSectionData?.descriptionTop}
      </p>
      <div className="bg-neutral-100 rounded-xl py-12 px-8 mb-4">
        <h3 className="text-heading-2xs text-neutral-900 mb-14">
          {thirdSectionData?.pspCards?.heading}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-11">
          {thirdSectionData?.pspCards?.points &&
            thirdSectionData?.pspCards?.points.map(
              (point: { id: string; listText: string }) => (
                <p key={point?.id} className="flex gap-2">
                  <span className="shrink-0">
                    <Image
                      src={ecilips}
                      alt="ecilips"
                      className="shrink-0 relative top-0.5"
                    />
                  </span>
                  <span className="text-label-xl text-neutral-900">
                    {point?.listText}
                  </span>
                </p>
              ),
            )}
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="text-heading-xs text-neutral-800 mb-2">
              {thirdSectionData?.headingBottom || "Let’s connect!"}
            </h2>
            <p className="text-label-xl text-neutral-700 md:w-2/3">
              {thirdSectionData?.descriptionBottom ||
                "Looking for something specific or have a unique ask?Let’s talk and figure it out together"}
            </p>
          </div>
          <div>
            {thirdSectionData?.bottomIcon?.url ? (
              <Image
                src={thirdSectionData?.bottomIcon?.url}
                alt={thirdSectionData?.bottomIcon?.alternativeText || "icon"}
                width={thirdSectionData?.bottomIcon?.width || 105}
                height={thirdSectionData?.bottomIcon?.height || 105}
              />
            ) : (
              <Image src={arrow} alt={"icon"} width={105} height={105} />
            )}
          </div>
        </div>
        <div>
          <ButtonTag
            variant={"secondary"}
            label={thirdSectionData?.bottomLink?.name || "Talk to labs"}
            href={thirdSectionData?.bottomLink?.href || "#"}
          />
        </div>
      </div>
    </Section>
  );
};

export default PseoThirdSection;
