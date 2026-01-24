import Section from "@/components/global/Section";
import { ArrowRight } from "lucide-react";
import { CapablitiesHeroSection } from "../main/CapablityContainer";
import ButtonTag from "@/components/shared/ButtonTag";

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
          <ButtonTag
            label={button?.name || "Learn More"}
            href={button?.href || "#"}
            key={index}
            icon={index === 1 ? <ArrowRight /> : null}
            variant={index === 0 ? "secondary" : "link"}
          />
        ))}
      </div>
    </Section>
  );
};

export default CapablitySharedIntroSec;
