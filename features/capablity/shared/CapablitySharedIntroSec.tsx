import Section from "@/components/global/Section";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CapablitiesHeroSection } from "../main/CapablityContainer";

type CapablitySharedIntroSecProps = {
  introSectionData?: CapablitiesHeroSection;
};

const CapablitySharedIntroSec = ({
  introSectionData,
}: CapablitySharedIntroSecProps) => {
  if (!introSectionData) return null;

  return (
    <Section>
      <div className="mb-12">
        <h1 className="text-center lg:w-3/5 mx-auto mb-4 sm:mb-6">
          <span className="text-display-sm text-accent-600">
            {introSectionData?.heading?.split("|")[0]}
          </span>
          <span className="text-heading-md text-neutral-800">
            {introSectionData?.heading?.split("|")[1]}
          </span>
        </h1>
        <p className="text-label-xl lg:w-4/5 mx-auto text-center text-neutral-700">
          {introSectionData?.description}
        </p>
        {introSectionData?.descriptionTwo && (
          <p className="text-label-xl lg:w-4/5 mx-auto text-center text-neutral-700">
            {introSectionData?.descriptionTwo}
          </p>
        )}
      </div>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        {introSectionData?.heroSectionButton?.map((button, index) => (
          <Link
            key={index}
            href={button?.href || "#"}
            className={`flex items-center gap-1 uppercase bg-neutral-50 hover:bg-neutral-100  ${buttonVariants(
              { variant: "default" }
            )}`}
          >
            {button?.name} {index === 1 ? <ArrowRight /> : null}
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default CapablitySharedIntroSec;
