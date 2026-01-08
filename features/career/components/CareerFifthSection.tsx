import Section from "@/components/global/Section";
import { buttonVariants } from "@/components/ui/button";
import { CareerQuery } from "@/lib/codegen/graphql";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const CareerFifthSection = ({
  fifthSectionData,
}: {
  fifthSectionData: NonNullable<CareerQuery["career"]>["fifthSection"];
}) => {
  return (
    <Section className="col-span-12">
      <div className="p-2 rounded-xl bg-neutral-50 grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="p-8 rounded-xl bg-neutral-100 flex flex-col justify-between gap-4">
          <h3 className="text-heading-sm text-neutral-900">
            {fifthSectionData?.heading}
          </h3>
          <div>
            <p className="text-label-xl text-neutral-800 mb-6">
              {fifthSectionData?.description}
            </p>
            <Link
              href={fifthSectionData?.link?.href || "#"}
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-neutral-900 text-neutral-50"
              )}
            >
              {fifthSectionData?.link?.name}
            </Link>
          </div>
        </div>
        <div className="p-8 rounded-xl bg-neutral-900 flex flex-col justify-between gap-4">
          <h3 className="text-heading-sm text-neutral-50">
            {fifthSectionData?.rightSection?.heading}
          </h3>
          <div className="flex flex-col gap-6">
            {fifthSectionData?.rightSection?.rightSectionPoints &&
              fifthSectionData?.rightSection?.rightSectionPoints.length > 0 &&
              fifthSectionData?.rightSection?.rightSectionPoints?.map(
                (point) => {
                  return (
                    <div key={point?.id} className="flex items-center gap-2">
                      {point?.icon?.url && (
                        <div>
                          <Image
                            src={point?.icon?.url ?? ""}
                            width={16}
                            height={16}
                            alt={
                              point?.icon?.alternativeText ??
                              "Third section icon"
                            }
                          />
                        </div>
                      )}
                      <p className="text-label-xl text-neutral-50">
                        {point?.points}
                      </p>
                    </div>
                  );
                }
              )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CareerFifthSection;
