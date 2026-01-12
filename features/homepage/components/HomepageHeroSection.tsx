import { Block } from "@/components/global/Block";
import { Container } from "@/components/global/Container";
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
      <Section className="sm:py-0 grid lg:grid-cols-2 gap-2">
        <div className="lg:flex-1 flex lg:justify-end items-center">
          <div className="lg:w-[550px] w-full pl-2 lg:pt-0 pt-20">
            <div className="mb-4 sm:mb-6">
              <h1 className="sm:flex flex-wrap">
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
              <h1 className="sm:flex flex-wrap">
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
        </div>
        <div className="flex flex-1 justify-center items-center">
          {heroSectionData?.rightSectionImage?.url && (
            <div>
              <Image
                alt={
                  heroSectionData?.rightSectionImage?.alternativeText ||
                  "hero section image"
                }
                src={heroSectionData?.rightSectionImage?.url}
                width={heroSectionData?.rightSectionImage?.width||600}
                height={heroSectionData?.rightSectionImage?.height||800}
              />
            </div>
          )}
        </div>
      </Section>
      <Container className="md:grid grid-cols-12 gap-6">
        <Block className="lg:col-start-2 col-start-1 lg:col-end-12 col-end-13">
          <Section>
            <div className="p-10">
              <h2 className="text-heading-xs mx-auto mb-4 sm:mb-6">
                <ScrollReveal
                  initialColor="#b1b1b1"
                  finalColor="#000000"
                  value={heroSectionData?.descriptionTwo || ""}
                />
              </h2>
              <div className="flex items-center flex-col sm:flex-row gap-4">
                {heroSectionData?.bottomTags &&
                  heroSectionData?.bottomTags?.map((singleTag) => (
                    <p
                      className="text-label-sm text-neutral-700 text-center sm:text-left"
                      key={singleTag?.id}
                    >
                      <span className="text-neutral-900 font-semibold">
                        {singleTag?.listText?.split("|")[0]}
                      </span>
                      <span className="text-neutral-700">
                        {singleTag?.listText?.split("|")[1]}
                      </span>
                    </p>
                  ))}
              </div>
            </div>
          </Section>
        </Block>
      </Container>
    </>
  );
};

export default HomepageHeroSection;
