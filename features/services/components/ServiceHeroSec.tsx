import Section from "@/components/global/Section";
import ButtonTag from "@/components/shared/ButtonTag";
import { ServiceQuery } from "@/lib/codegen/graphql";
import { ArrowRight } from "lucide-react";

const ServiceHeroSection = ({
  heroSectionData,
}: {
  heroSectionData: NonNullable<ServiceQuery["service"]>["hero"];
}) => {
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
      <div className="lg:w-4/5 mx-auto flex justify-center md:justify-between items-center gap-8 md:gap-2 mt-12 flex-wrap">
        {heroSectionData?.label?.map((singleLabel) => {
          return (
            <p className="text-label-md" key={singleLabel?.id}>
              <span className="text-accent-600">
                {singleLabel?.listText?.split(",")[0]}
              </span>
              <span>{singleLabel?.listText?.split(",")[1]}</span>
            </p>
          );
        })}
      </div>
      <div className="mt-12 flex justify-center items-center gap-4 flex-wrap">
        {heroSectionData?.heroSectionButton?.map((button, index) => (
          <ButtonTag
            key={index}
            label={button?.name || "Button"}
            href={button?.href || "#"}
            icon={index === 1 ? <ArrowRight /> : null}
            variant={index===1?"ghost":"neutral"}
          />
        ))}
      </div>
    </Section>
  );
};

export default ServiceHeroSection;
