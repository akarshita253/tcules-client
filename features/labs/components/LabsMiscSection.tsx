import Section from "@/components/global/Section";
import { buttonVariants } from "@/components/ui/button";
import { LabSingleTypeQuery } from "@/lib/codegen/graphql";
import Link from "next/link";

type LabsMiscSectionProps = {
  labsMiscData: NonNullable<
    NonNullable<LabSingleTypeQuery["labSingleType"]>["miscSection"]
  >;
};

const LabsMiscSection = ({ labsMiscData }: LabsMiscSectionProps) => {
  return (
    <Section>
      <div className="space-y-3 mb-9">
        <p className="text-label-2xs text-neutral-600">
          {labsMiscData?.label}
        </p>
        <h1 className="">
          <span className="text-heading-sm text-neutral-800 ">
            {labsMiscData?.heading?.split(",")[0]}
          </span>
          <span className=" text-display-xs text-accent-600">
            {labsMiscData?.heading?.split(",")[1]}
          </span>
        </h1>
        <p className="text-neutral-800 text-label-xl">
          {labsMiscData?.description}
        </p>
      </div>
      <div className="">
        <Link
          className={`uppercase  ${buttonVariants(
            { variant: "default" }
          )}`}
          href={labsMiscData?.button?.href || "#"}
        >
          {labsMiscData?.button?.name || "See how we work"}
        </Link>
      </div>
    </Section>
  );
};

export default LabsMiscSection;
