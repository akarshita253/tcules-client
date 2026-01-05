import Section from "@/components/global/Section";
import { buttonVariants } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { HomepageQuery } from "@/lib/codegen/graphql";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const HomepageHeroSection = ({
  heroSectionData,
}: {
  heroSectionData: NonNullable<HomepageQuery["homepage"]>["heroSection"];
}) => {
  return (
    <>
      <Section className="sm:py-[146px] my-6 sm:my-12">
        <div className="mb-4 sm:mb-6">
          <h1 className="sm:flex sm:w-xl mx-auto">
            <span className="text-heading-xl text-neutral-900">
              {heroSectionData?.headingOne?.split("|")[0]}
            </span>{" "}
            <span className="">
              {heroSectionData?.headingOne?.split("|")[1] && (
                <TypewriterEffect
                  words={[
                    {
                      text: heroSectionData?.headingOne?.split("|")[1],
                      className : " text-accent-600",
                    },
                  ]}
                />
              )}
            </span>
          </h1>
          <h1 className="sm:flex sm:w-xl mx-auto">
            <span className="text-heading-xl text-neutral-900">
              {heroSectionData?.headingTwo?.split("|")[0]}
            </span>{" "}
            <span>
              {heroSectionData?.headingTwo?.split("|")[1] && (
                <TypewriterEffect
                  words={[
                    {
                      text: heroSectionData?.headingTwo?.split("|")[1],
                      className : " text-accent-600",
                    },
                  ]}
                />
              )}
            </span>
          </h1>
        </div>
        <p className="text-label-xl text-neutral-800 mb-6 sm:mb-11 text-center">
          {heroSectionData?.descriptionOne}
        </p>
        <div className="flex justify-center gap-4">
          {heroSectionData?.button?.map((singleButton, index) => (
            <button
              key={index}
              className={`flex items-center gap-1 uppercase bg-neutral-50 hover:bg-neutral-900 hover:text-neutral-50 transition-all ${buttonVariants(
                { variant: "default" }
              )}`}
            >
              {singleButton?.name} {index === 1 ? <ArrowRight /> : null}
            </button>
          ))}
        </div>
      </Section>
      <Section>
        <h2 className="text-heading-xs sm:w-4/5 mx-auto text-center mb-4 sm:mb-6">
          {heroSectionData?.descriptionTwo?.split("|").map((item, index) => (
            <span
              className={cn(
                index % 2 === 0 ? "text-neutral-600" : "text-neutral-900"
              )}
              key={index}
            >
              {item}
            </span>
          ))}
        </h2>
        <div className="flex items-center justify-center flex-col sm:flex-row gap-4">
          {heroSectionData?.bottomTags &&
            heroSectionData?.bottomTags?.map((singleTag) => (
              <p className="text-label-sm text-neutral-700" key={singleTag?.id}>
                <span className="text-neutral-900 font-semibold">
                  {singleTag?.listText?.split("|")[0]}
                </span>
                <span className="text-neutral-700">
                  {singleTag?.listText?.split("|")[1]}
                </span>
              </p>
            ))}
        </div>
      </Section>
    </>
  );
};

export default HomepageHeroSection;
