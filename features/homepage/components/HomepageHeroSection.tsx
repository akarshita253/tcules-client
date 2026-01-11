import Section from "@/components/global/Section";
import { buttonVariants } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/scroll-change";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { HomepageQuery } from "@/lib/codegen/graphql";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const HomepageHeroSection = ({
  heroSectionData,
}: {
  heroSectionData: NonNullable<HomepageQuery["homepage"]>["heroSection"];
}) => {
  return (
    <>
      <Section className="sm:py-[146px] my-6 sm:my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="mb-4 sm:mb-6">
            <h1 className="md:flex">
              <span className="text-heading-xl text-neutral-900">
                {heroSectionData?.headingOne?.split("|")[0]}
              </span>{" "}
              <span className="">
                {heroSectionData?.headingOne?.split("|")[1] && (
                  <TypewriterEffect
                    words={[
                      {
                        text: heroSectionData?.headingOne?.split("|")[1],
                        className: " text-accent-600",
                      },
                    ]}
                  />
                )}
              </span>
            </h1>
            <h1 className="md:flex">
              <span className="text-heading-xl text-neutral-900">
                {heroSectionData?.headingTwo?.split("|")[0]}
              </span>{" "}
              <span>
                {heroSectionData?.headingTwo?.split("|")[1] && (
                  <TypewriterEffect
                    words={[
                      {
                        text: heroSectionData?.headingTwo?.split("|")[1],
                        className: " text-accent-600",
                      },
                    ]}
                  />
                )}
              </span>
            </h1>
          </div>
          <p className="text-label-xl text-neutral-800 mb-6 sm:mb-11">
            {heroSectionData?.descriptionOne}
          </p>
          <div className="flex  gap-4">
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
        </div>

        {heroSectionData?.rightSectionImage?.url && (
          <div className="w-full">
            <Image
              alt={
                heroSectionData?.rightSectionImage?.alternativeText ||
                "hero section image"
              }
              src={heroSectionData?.rightSectionImage?.url}
              fill
              className="object-cover"
            />
          </div>
        )}
      </Section>
      <Section>
        <h2 className="text-heading-xs mx-auto mb-4 sm:mb-6">
          <ScrollReveal initialColor="#b1b1b1" finalColor="#000000" value={heroSectionData?.descriptionTwo || ""} />
        </h2>
        <div className="flex items-center flex-col sm:flex-row gap-4">
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

          {/* <h2 className="text-heading-lg max-w-full">
                        <span className="text-accent-500">
                          {thirdSectionData?.description?.split("|")[0]}
                        </span>
                          <ScrollReveal
                            value={thirdSectionData?.description?.split("|")[1] || ""}
                          />
                      </h2> */}
        </div>
      </Section>
    </>
  );
};

export default HomepageHeroSection;
