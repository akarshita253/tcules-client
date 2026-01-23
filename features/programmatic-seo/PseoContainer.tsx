import { Block } from "@/components/global/Block";
import { Container } from "@/components/global/Container";
import {
  ProgrammaticSeoPagesQuery,
  TestimonialsQuery,
} from "@/lib/codegen/graphql";
import PseoHeroSection from "./components/PseoHeroSection";
import PseoFourthSection from "./components/PseoFourthSection";
import PseoFifthSection from "./components/PseoFifthSection";
import PseoSixthSection from "./components/PseoSixthSection";
import PseoTestimonials from "./components/PseoTestimonials";
import PseoResourceSection from "./components/PseoResourceSection";
import PseoFaqSection from "./components/PseoFaqSection";
import PseoContactUs from "./components/PseoContactUs";
import PseoSecondSection from "./components/PseoSecondSection";
import PseoThirdSection from "./components/PseoThirdSection";
import { parseFifthSection, parseFourthSection, parseThirdSection } from "./functions/parseSection";

type UiLink = {
  name: string;
  href: string;
};

export function normalizeLink(
  link?: {
    name?: string | null;
    href?: string | null;
  } | null
): UiLink {
  return {
    name: link?.name ?? "",
    href: link?.href ?? "#",
  };
}

const PseoContainer = ({
  programaticLandingPageData,
  testimonialData,
}: {
  programaticLandingPageData: NonNullable<
    ProgrammaticSeoPagesQuery["programmaticSeoPages"][0]
  >;
  testimonialData: TestimonialsQuery["testimonials"];
}) => {
  const secondSectionData = programaticLandingPageData.secondSection;
  const thirdSectionData = programaticLandingPageData.thirdSection;
  const fourthSectionData = programaticLandingPageData.fourthSection;
  const fifthSectionData = programaticLandingPageData.fifthSection;
  const sixthSectionData = programaticLandingPageData.sixthSection;
  const testimonialHeading =
    programaticLandingPageData.testimonialSection?.heading;
  const testimonialDescription =
    programaticLandingPageData.testimonialSection?.description;
  const resourcesData = programaticLandingPageData.resourceSection;
  const faqData = programaticLandingPageData.faqSection;
  const contactUsData = programaticLandingPageData.contactUs;

  console.log(programaticLandingPageData, "this this this");
  return (
    <main>
      <Container className="md:grid grid-cols-12 gap-6">
        <Block className="lg:col-start-2 col-start-1 lg:col-end-12 col-end-13">
            <PseoHeroSection
              title={programaticLandingPageData.title||""}
              description={programaticLandingPageData.description||""}
              heroSectionButton={normalizeLink(programaticLandingPageData.heroSectionLink)}
            />
          {secondSectionData && (
            <PseoSecondSection secondSectionData={secondSectionData} />
          )}
          {thirdSectionData && (
            <PseoThirdSection thirdSectionData={parseThirdSection(programaticLandingPageData.thirdSection)} />
          )}
          {fourthSectionData && (
            <PseoFourthSection fourthSectionData={parseFourthSection(programaticLandingPageData.fourthSection)} />
          )}
          {fifthSectionData && (
            <PseoFifthSection fifthSectionData={parseFifthSection(programaticLandingPageData.fifthSection)} />
          )}
          {sixthSectionData && (
            <PseoSixthSection sixthSectionData={sixthSectionData} />
          )}
          {testimonialData && (
            <PseoTestimonials
              testimonialHeading={testimonialHeading!}
              testimonialDescription={testimonialDescription!}
              testimonialData={testimonialData}
            />
          )}
          {resourcesData && (
            <PseoResourceSection resourcesData={resourcesData} />
          )}
          {faqData && <PseoFaqSection faqData={faqData} />}
          {contactUsData && <PseoContactUs contactUsData={contactUsData} />}
        </Block>
      </Container>
    </main>
  );
};

export default PseoContainer;
