import Section from "@/components/global/Section";
import { buttonVariants } from "@/components/ui/button";
import { MatterDesignSystemQuery } from "@/lib/codegen/graphql";
import Image from "next/image";
import Link from "next/link";

const MatterDesignHeroSection = ({
  heroSectionData,
}: {
  heroSectionData: NonNullable<
    MatterDesignSystemQuery["matterDesignSystem"]
  >["heroSection"];
}) => {
  return (
    <>
      <Section>
        <h3 className="text-label-sm uppercase text-neutral-200 mb-4 sm:mb-6 text-center">
          {heroSectionData?.label}
        </h3>
        <h1 className="text-center lg:w-3/5 mx-auto">
          <span className="text-display-sm text-accent-500">
            {heroSectionData?.headingOne?.split("|")[0]}
          </span>
          <span className="text-heading-sm text-neutral-100">
            {heroSectionData?.headingOne?.split("|")[1]}
          </span>
        </h1>
        <h1 className="text-center lg:w-3/5 mx-auto mb-4 sm:mb-6">
          <span className="text-display-sm text-accent-500">
            {heroSectionData?.headingTwo?.split("|")[0]}
          </span>
          <span className="text-heading-sm text-neutral-100">
            {heroSectionData?.headingTwo?.split("|")[1]}
          </span>
        </h1>
        <p className="text-label-xl mt-6 lg:w-4/5 mx-auto text-center text-neutral-200 mb-6 sm:mb-12">
          {heroSectionData?.description}
        </p>
        <div className="mt-12 flex justify-center items-center gap-4 flex-wrap">
          <Link
            href={heroSectionData?.link?.href || "#"}
            className={`flex items-center gap-1 uppercase  ${buttonVariants({
              variant: "default",
            })}`}
          >
            {heroSectionData?.link?.name}
          </Link>
        </div>
      </Section>
      {heroSectionData?.featureImage?.url && (
        <div>
          <Image
            src={heroSectionData?.featureImage?.url}
            width={heroSectionData?.featureImage?.width || 1116}
            height={heroSectionData?.featureImage?.height || 534}
            alt={
              heroSectionData?.featureImage?.alternativeText || "feature-image"
            }
          />
        </div>
      )}
    </>
  );
};

export default MatterDesignHeroSection;
