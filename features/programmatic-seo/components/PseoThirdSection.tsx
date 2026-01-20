import Section from "@/components/global/Section";
import { ProgrammaticSeoPagesQuery } from "@/lib/codegen/graphql";
import Image from "next/image";
import ecilips from "@/public/bulletcir.png";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {thirdSectionData?.pspCards?.points &&
            thirdSectionData?.pspCards?.points.map((point) => (
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
            ))}
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between">
          <div>
            <h2 className="text-heading-xs text-neutral-800 mb-2">
              {thirdSectionData?.headingBottom}
            </h2>
            <p className="text-label-xl text-neutral-700 md:w-2/3">
              {thirdSectionData?.descriptionBottom}
            </p>
          </div>
          <div>
            {thirdSectionData?.bottomIcon?.url && (
              <Image
                src={thirdSectionData?.bottomIcon?.url}
                alt={thirdSectionData?.bottomIcon?.alternativeText || "icon"}
                width={thirdSectionData?.bottomIcon?.width || 105}
                height={thirdSectionData?.bottomIcon?.height || 105}
              />
            )}
          </div>
        </div>
        <div>
            <Link className={cn(buttonVariants({ variant: "default" }),"bg-neutral-900 text-neutral-50")} href={thirdSectionData?.bottomLink?.href||"#"}>
            {thirdSectionData?.bottomLink?.name}
            </Link>
        </div>
      </div>
    </Section>
  );
};

export default PseoThirdSection;
