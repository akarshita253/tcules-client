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

const PseoContainer = ({
  programaticLandingPageData,
  testimonialData,
}: {
  programaticLandingPageData: NonNullable<
    ProgrammaticSeoPagesQuery["programmaticSeoPages"][0]
  >;
  testimonialData: TestimonialsQuery["testimonials"];
}) => {
  const heroSectionData = programaticLandingPageData.heroSection;
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
  return (
    <main>
      <Container className="md:grid grid-cols-12 gap-6">
        <Block className="lg:col-start-2 col-start-1 lg:col-end-12 col-end-13">
          {heroSectionData && (
            <PseoHeroSection heroSectionData={heroSectionData} />
          )}
          {secondSectionData && (
            <PseoSecondSection secondSectionData={secondSectionData} />
          )}
          {thirdSectionData && (
            <PseoThirdSection thirdSectionData={thirdSectionData} />
          )}
          {fourthSectionData && (
            <PseoFourthSection fourthSectionData={fourthSectionData} />
          )}
          {fifthSectionData && (
            <PseoFifthSection fifthSectionData={fifthSectionData} />
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
