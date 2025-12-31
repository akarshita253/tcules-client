import Section from "@/components/global/Section";
import { buttonVariants } from "@/components/ui/button";
import { HowWeWorkQuery } from "@/lib/codegen/graphql";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HowWeWorkHeroSec = ({ heroSectionData }: { heroSectionData: NonNullable<HowWeWorkQuery["howWeWork"]>["heroSection"] }) => {
  return (
    <Section>
      <h1 className="text-center lg:w-3/5 mx-auto">
        <span className="text-display-sm text-accent-600">
          {heroSectionData?.heading?.split(",")[0]}
        </span>
        <span className="text-heading-sm text-neutral-800">
          {heroSectionData?.heading?.split(",")[1]}
        </span>
      </h1>
      <p className="text-label-xl mt-6 lg:w-4/5 mx-auto text-center text-neutral-700">
        {heroSectionData?.description}
      </p>
      <div className="mt-12 flex justify-center items-center gap-4 flex-wrap">
        {heroSectionData?.button?.map((singleButton, index) => (
          <Link
            key={index}
            href={singleButton?.href || "#"}
            className={`flex items-center gap-1 uppercase bg-neutral-50 hover:bg-neutral-100 ${buttonVariants(
              { variant: "default" }
            )}`}
          >
            {singleButton?.name} {index === 1 ? <ArrowRight /> : null}
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default HowWeWorkHeroSec;
