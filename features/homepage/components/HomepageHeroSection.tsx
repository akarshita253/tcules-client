"use client";
import Section from "@/components/global/Section";
import ScrollReveal from "@/components/ui/scroll-change";
import { HomepageQuery } from "@/lib/codegen/graphql";
import { ArrowRight } from "lucide-react";
import HomePageHeroSecHeading from "./HomePageHeroSecHeading";
import ButtonTag from "@/components/shared/ButtonTag";
import PhotoMarquee from "./Scroll";

const HomepageHeroSection = ({
  heroSectionData,
}: {
  heroSectionData: NonNullable<HomepageQuery["homepage"]>["heroSection"];
}) => {
  return (
    <>
      <Section className="sm:py-0  min-h-screen relative lg:grid grid-cols-12 gap-6">
        <div className="h-fit my-auto  bottom-8 col-span-6">
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
        <div className="col-span-6 relative">
          <PhotoMarquee scrollImages = {heroSectionData?.scrollImages}/>
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
