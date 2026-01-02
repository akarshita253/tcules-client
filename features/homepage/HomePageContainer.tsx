import { Block } from "@/components/global/Block";
import { Container } from "@/components/global/Container";
import { HomepageQuery } from "@/lib/codegen/graphql";
import HomepageHeroSection from "./components/HomepageHeroSection";
import HomepageSecondSection from "./components/HomepageSecondSection";
import HomepageThirdSection from "./components/HomepageThirdSection";
import HomepageFourthSection from "./components/HomepageFourthSection";
import HomepageFifthSection from "./components/HomepageFifthSection";
import ContactAndTestimonials from "./components/ContactAndTestimonials";

const HomePageContainer = ({
  homepageData,
}: {
  homepageData: NonNullable<HomepageQuery["homepage"]>;
}) => {
  const heroSectionData = homepageData?.heroSection;
  const secondSectionData = homepageData?.secondSection;
  const thirdSectionData = homepageData?.thirdSection;
  const fourthSectionData = homepageData?.fourthSection;
  const fifthSectionData = homepageData?.fifthSection;
  const contactSectionData = homepageData?.contactSection;

  return (
    <main className="bg-neutral-100">
      <Container className="md:grid grid-cols-12 gap-6">
        <Block className="lg:col-start-2 col-start-1 lg:col-end-12 col-end-13">
          <HomepageHeroSection heroSectionData={heroSectionData} />
        </Block>
      </Container>
      <div className="px-3">
        <HomepageSecondSection secondSectionData={secondSectionData} />
      </div>
      <Container className="md:grid grid-cols-12 gap-6">
        <Block className="lg:col-start-2 col-start-1 lg:col-end-12 col-end-13">
          <HomepageThirdSection thirdSectionData={thirdSectionData} />
          <HomepageFourthSection fourthSectionData={fourthSectionData} />
          <HomepageFifthSection fifthSectionData={fifthSectionData} />
        </Block>
      </Container>
      <div className="bg-neutral-50">
        <Container className="md:grid grid-cols-12 gap-6">
          <Block className="lg:col-start-2 col-start-1 lg:col-end-12 col-end-13">
            <ContactAndTestimonials contactSectionData={contactSectionData} />
          </Block>
        </Container>
      </div>
    </main>
  );
};

export default HomePageContainer;
