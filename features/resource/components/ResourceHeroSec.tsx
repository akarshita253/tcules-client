import Section from "@/components/global/Section";
import { buttonVariants } from "@/components/ui/button";
import { ResourceQuery } from "@/lib/codegen/graphql";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Substract from "@/public/Subtract.png";

type HeroSectionData = Pick<
  NonNullable<ResourceQuery["resource"]>,
  "heading" | "description" | "cardDetails"
>;

const ResourceHeroSec = ({
  heroSectionData,
  secondSectionData,
}: {
  heroSectionData: HeroSectionData;
  secondSectionData: NonNullable<ResourceQuery["resource"]>["secondSection"];
}) => {
  return (
    <>
      <Section>
        <h1 className="text-center lg:w-3/5 mx-auto">
          <span className="text-display-sm text-accent-600 inline-block">
            {heroSectionData?.heading?.split("|")[0]}
          </span>
          <span className="text-heading-sm text-neutral-800 inline-block">
            {heroSectionData?.heading?.split("|")[1]}
          </span>
        </h1>
        <p className="text-label-xl mt-6 lg:w-4/5 mx-auto text-center text-neutral-700 mb-[108px]">
          {heroSectionData?.description}
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {heroSectionData?.cardDetails &&
            heroSectionData?.cardDetails?.map((singleCard) => {
              return (
                <div
                  className="relative w-full h-40 rounded-xl overflow-hidden"
                  key={singleCard?.id}
                >
                  {singleCard?.cardImage?.url && (
                    <Image
                      src={singleCard?.cardImage?.url}
                      fill
                      className="object-cover"
                      alt="Hero section image"
                    />
                  )}
                  <h3 className="p-4 absolute bottom-0 left-0 text-neutral-50 text-heading-2xs">
                    {singleCard?.heading}
                  </h3>
                </div>
              );
            })}
        </div>
      </Section>
      <div className="p-8 shadow-[0_4px_48px_0_rgba(0,0,0,0.04)] relative bg-neutral-800 rounded-xl">
        <div>
          <Image
            src={secondSectionData?.link?.icon?.url || Substract}
            className="absolute right-0 bottom-0"
            alt="subtract-icon"
            width={secondSectionData?.link?.icon?.width || 185}
            height={secondSectionData?.link?.icon?.height || 185}
          />
        </div>
        <h3 className="text-heading-xs text-neutral-100 mb-3">
          {secondSectionData?.heading}
        </h3>
        <p className="text-label-xl text-neutral-200 mb-8 lg:w-4/6">
          {secondSectionData?.description}
        </p>
        <Link
          href={secondSectionData?.link?.href || "#"}
          className={cn(buttonVariants({ variant: "default" }))}
        >
          {secondSectionData?.link?.name}
        </Link>
      </div>
    </>
  );
};

export default ResourceHeroSec;
