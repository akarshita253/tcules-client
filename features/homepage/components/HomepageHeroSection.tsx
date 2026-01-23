"use client";
import Section from "@/components/global/Section";
import ScrollReveal from "@/components/ui/scroll-change";
import { HomepageQuery } from "@/lib/codegen/graphql";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import HomePageHeroSecHeading from "./HomePageHeroSecHeading";
import ButtonTag from "@/components/shared/ButtonTag";

const HomepageHeroSection = ({
  heroSectionData,
}: {
  heroSectionData: NonNullable<HomepageQuery["homepage"]>["heroSection"];
}) => {
  return (
    <>
      <Section className="sm:py-[120px] lg:flex items-center min-h-screen ">
        <div className="h-fit my-auto relative bottom-8">
          <div>
            {heroSectionData?.headingOne && heroSectionData?.headingTwo && (
              <div className="mb-4 sm:mb-6">
                <HomePageHeroSecHeading
                  headingOne={heroSectionData?.headingOne}
                  headingTwo={heroSectionData?.headingTwo}
                />
              </div>
            )}
            <p className="text-label-xl text-neutral-800 mb-6 sm:mb-11">
              {heroSectionData?.descriptionOne}
            </p>
            <div className="flex  gap-4">
              {heroSectionData?.button?.map((singleButton, index) => (
                <ButtonTag
                  key={index}
                  label={singleButton?.name || "Button"}
                  variant={index != 0 ? "ghost" : "secondary"}
                  href={singleButton?.href || "#"}
                  icon={index === 1 ? <ArrowRight /> : null}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:-right-40 xl:right-0 top-0 flex flex-1 justify-center items-center">
          {heroSectionData?.rightSectionImage?.url && (
            <div>
              <Image
                alt={
                  heroSectionData?.rightSectionImage?.alternativeText ||
                  "hero section image"
                }
                src={heroSectionData?.rightSectionImage?.url}
                width={heroSectionData?.rightSectionImage?.width || 600}
                height={heroSectionData?.rightSectionImage?.height || 800}
              />
            </div>
          )}
        </div>
      </Section>
      <Section>
        <div className="p-10">
          <h2 className="text-heading-sm mx-auto mb-4 sm:mb-6">
            <ScrollReveal
              initialColor="#b1b1b1"
              finalColor="#000000"
              value={heroSectionData?.descriptionTwo || ""}
            />
          </h2>
          <div className="flex items-center flex-col sm:flex-row gap-4">
            {heroSectionData?.bottomTags &&
              heroSectionData?.bottomTags?.map((singleTag) => (
                <p className="text-left" key={singleTag?.id}>
                  <span className="text-neutral-900 font-semibold text-label-lg">
                    {singleTag?.listText?.split("|")[0]}
                  </span>
                  <span className="text-neutral-700 text-label-3xs">
                    {singleTag?.listText?.split("|")[1]}
                  </span>
                </p>
              ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default HomepageHeroSection;
