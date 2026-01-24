import Section from "@/components/global/Section";
import ButtonTag from "@/components/shared/ButtonTag";
import { LabSingleTypeQuery } from "@/lib/codegen/graphql";
import { cn } from "@/lib/utils";
import Image from "next/image";
type LabsInterfaceSectionProps = {
  labsInterfaceSection: NonNullable<
    NonNullable<LabSingleTypeQuery["labSingleType"]>["interfaceLabs"]
  >;
};

const InterfaceLabsSection = ({
  labsInterfaceSection,
}: LabsInterfaceSectionProps) => {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="p-8 flex flex-col justify-between gap-2">
          {labsInterfaceSection?.labsInterfaceCards &&
            labsInterfaceSection?.labsInterfaceCards[0]?.icon?.url && (
              <div className="flex justify-end">
                <Image
                  src={labsInterfaceSection?.labsInterfaceCards[0]?.icon?.url}
                  alt={
                    labsInterfaceSection?.labsInterfaceCards[0]?.icon
                      ?.alternativeText || "Interface Image"
                  }
                  width={
                    labsInterfaceSection?.labsInterfaceCards[0]?.icon?.width ||
                    96
                  }
                  height={
                    labsInterfaceSection?.labsInterfaceCards[0]?.icon?.height ||
                    96
                  }
                />
              </div>
            )}
          <div>
            <h3 className="mb-9">
              <span className="text-display-xs text-neutral-500 inline-block">
                {labsInterfaceSection?.labsInterfaceCards &&
                  labsInterfaceSection?.labsInterfaceCards[0]?.heading
                    ?.split("|")
                    .at(0)}
              </span>
              <span className="text-heading-sm text-neutral-50 inline-block">
                {labsInterfaceSection?.labsInterfaceCards &&
                  labsInterfaceSection?.labsInterfaceCards[0]?.heading
                    ?.split("|")
                    .at(1)}
              </span>
            </h3>
            <ButtonTag
              href={labsInterfaceSection?.labsInterfaceCards?.at(0)?.link?.href||"#"}
              label={labsInterfaceSection?.labsInterfaceCards?.at(0)?.link?.name||"Button"}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {labsInterfaceSection?.labsInterfaceCards
            ?.slice(1)
            .map((singleCard, index) => (
              <div
                className={cn(
                  index === 2 ? "col-span-2" : "",
                  "p-8 bg-neutral-800 flex flex-col justify-between gap-2 rounded-lg min-h-[234px]",
                )}
                key={singleCard?.id}
              >
                {singleCard?.icon?.url && (
                  <div className="flex justify-end">
                    <Image
                      src={singleCard?.icon?.url}
                      alt={
                        singleCard?.icon?.alternativeText || "Interface Image"
                      }
                      width={singleCard?.icon?.width || 40}
                      height={singleCard?.icon?.height || 40}
                    />
                  </div>
                )}
                <h3 className="text-heading-xs text-neutral-50">
                  {singleCard?.heading}
                </h3>
              </div>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default InterfaceLabsSection;
