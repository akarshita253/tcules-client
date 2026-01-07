import { Block } from "@/components/global/Block";
import { Container } from "@/components/global/Container";
import { AboutQuery } from "@/lib/codegen/graphql";
import AboutHeroSection from "./components/AboutHeroSection";
import AboutSecondSection from "./components/AboutSecondSection";
import AboutThirdSection from "./components/AboutThirdSection";
import AboutFourthSection from "./components/AboutFourthSection";
import AboutFifthSection from "./components/AboutFifthSection";
import AboutSixthSection from "./components/AboutSixthSection";
import AboutSeventhSection from "./components/AboutSeventhSection";
import Section from "@/components/global/Section";

const AboutContainer = ({
  aboutData,
}: {
  aboutData: NonNullable<AboutQuery["about"]>;
}) => {
  console.log(aboutData, "this is about data");
  const { bgImage, heading, description, descriptionTwo, headingTwo } =
    aboutData;
  const secondSectionData = aboutData?.secondSection;
  const thirdSectionData = aboutData?.thirdSection;
  const fourthSectionData = aboutData?.fourthSection;
  const fifthSectionData = aboutData?.fifthSection;
  const sixthSectionData = aboutData?.sixthSection;
  const seventhSectionData = aboutData?.seventhSection;
  return (
    <main className="bg-neutral-100">
      <AboutHeroSection
        bgImage={bgImage}
        heading={heading}
        description={description}
      />
      <Container className="md:grid grid-cols-12 gap-6">
        <Block className="lg:col-start-2 col-start-1 lg:col-end-12 col-end-13">
          <Section>
            <h2 className="text-heading-xs text-neutral-900 mb-6">{headingTwo}</h2>
            <p className="text-label-2xl text-neutral-600">{descriptionTwo}</p>
          </Section>
          <AboutSecondSection secondSectionData={secondSectionData}/>
          <AboutThirdSection thirdSectionData={thirdSectionData}/>
          <AboutFourthSection fourthSectionData={fourthSectionData}/>
          <AboutFifthSection fifthSectionData={fifthSectionData}/>
          <AboutSixthSection sixthSectionData={sixthSectionData}/>
          <AboutSeventhSection seventhSectionData={seventhSectionData}/>
        </Block>
      </Container>
    </main>
  );
};

export default AboutContainer;
