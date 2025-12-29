import Section from "@/components/global/Section";
import { buttonVariants } from "@/components/ui/button";
import { ServiceQuery } from "@/lib/codegen/graphql";
import Link from "next/link";

const Miscellaneous = ({
  miscSectionData,
}: {
  miscSectionData: NonNullable<ServiceQuery["service"]>["miscSection"];
}) => {
  return (
    <Section>
      <div className="text-center sm:w-4/5 mx-auto space-y-3 mb-9">
        <p className="text-label-2xs text-neutral-600">
          {miscSectionData?.label}
        </p>
        <h2 className="text-heading-sm text-neutral-800">
          {miscSectionData?.heading}
        </h2>
        <p className="text-neutral-800 text-label-xl">
          {miscSectionData?.description}
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Link className={`uppercase text-neutral-50 bg-neutral-900 ${buttonVariants({ variant: "default" })}`} href={miscSectionData?.button?.href || "#"}>
            {miscSectionData?.button?.name || "See how we work"}
        </Link>
      </div>
    </Section>
  );
};

export default Miscellaneous;
