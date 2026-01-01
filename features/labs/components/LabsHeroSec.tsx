import Section from "@/components/global/Section";
import { buttonVariants } from "@/components/ui/button";
import { LabSingleTypeQuery } from "@/lib/codegen/graphql";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Sub1Blur from "@/public/Sub1.png"
import Sub2Small from "@/public/Sub2Small.png"
import Image from "next/image";

const LabsHeroSec = ({
  heroSectionData,
}: {
  heroSectionData: NonNullable<
    LabSingleTypeQuery["labSingleType"]
  >["heroSection"];
}) => {
  return (
    <>
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
          {heroSectionData?.button?.map((button, index) => (
            <Link
              key={index}
              href={button?.href || "#"}
              className={`flex items-center gap-1 uppercase bg-neutral-50 hover:bg-neutral-100  ${buttonVariants(
                { variant: "default" }
              )}`}
            >
              {button?.name} {index === 0 ? <ArrowRight /> : null}
            </Link>
          ))}
        </div>
      </Section>
      <Section className="flex items-center justify-center relative">
        <h2 className="p-4 sm:p-6 text-heading-xs sm:w-5/7 z-10">
          <span>{heroSectionData?.highlightedDescription?.split("|").at(0)}</span>
          <span className="text-neutral-500">{heroSectionData?.highlightedDescription?.split("|").at(1)}</span>
        </h2>
        <Image src={Sub1Blur} alt="Hero section image" className="absolute top-0 -right-8"/>
        <Image src={Sub2Small} alt="Hero section small image" className="absolute top-0 left-8"/>
      </Section>
    </>
  );
};

export default LabsHeroSec;
