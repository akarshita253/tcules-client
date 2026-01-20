import Section from "@/components/global/Section";
import { buttonVariants } from "@/components/ui/button";
import { ProgrammaticSeoPagesQuery } from "@/lib/codegen/graphql";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const PseoSixthSection = ({
  sixthSectionData,
}: {
  sixthSectionData: NonNullable<
    ProgrammaticSeoPagesQuery["programmaticSeoPages"][number]
  >["sixthSection"];
}) => {
  return (
    <Section>
      <h2 className="text-heading-xs text-neutral-800 mb-12">
        {sixthSectionData?.heading}
      </h2>
      {sixthSectionData?.featureImage?.url && (
        <div className="mb-12">
          <Image
            src={sixthSectionData?.featureImage?.url}
            width={sixthSectionData?.featureImage?.width || 1116}
            height={sixthSectionData?.featureImage?.height || 550}
            alt={
              sixthSectionData?.featureImage?.alternativeText || "feature image"
            }
          />
        </div>
      )}
      <div className="flex justify-center items-center"> 
        <Link
          href={sixthSectionData?.link?.href || "#"}
          className={cn(
            buttonVariants({ variant: "default" }),
            "bg-neutral-900 text-neutral-50",
          )}
        >
          {sixthSectionData?.link?.name}
        </Link>
      </div>
    </Section>
  );
};

export default PseoSixthSection;
