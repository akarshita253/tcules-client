import { Block } from "@/components/global/Block";
import { Container } from "@/components/global/Container";
import { MatterDesignSystemQuery } from "@/lib/codegen/graphql";
import MatterDesignHeroSection from "./components/MatterDesignHeroSection";
import MatterDesignSecondSection from "./components/MatterDesignSecondSection";
import MatterDesignThirdSection from "./components/MatterDesignThirdSection";
import Strip from "./components/Strip";
import MatterDesignFifthSection from "./components/MatterDesignFifthSection";
import MatterDesignContactUs from "./components/MatterDesignContactUs";
import MatterDesignFourthSection from "./components/MatterDesignFourthSection";

const MatterDesignSystemContainer = ({
  matterDesignSystemData,
}: {
  matterDesignSystemData: NonNullable<
    MatterDesignSystemQuery["matterDesignSystem"]
  >;
}) => {
  const heroSectionData = matterDesignSystemData.heroSection;
  const secondSectionData = matterDesignSystemData?.secondSection;
  const thirdSectionData = matterDesignSystemData?.thirdSection;
  const stripOne = matterDesignSystemData?.stripOne;
  const stripTwo = matterDesignSystemData?.stripTwo;
  const fourthSectionData = matterDesignSystemData?.fourthSection;
  const fifthSectionData = matterDesignSystemData?.fifthSection;
  const contactUsData = matterDesignSystemData?.contactUs;
  return (
    <main className="bg-neutral-900">
      <Container className="md:grid grid-cols-12 gap-6">
        <Block className="lg:col-start-2 col-start-1 lg:col-end-12 col-end-13">
          <MatterDesignHeroSection heroSectionData={heroSectionData} />
          <MatterDesignSecondSection secondSectionData={secondSectionData} />
          <MatterDesignThirdSection thirdSectionData={thirdSectionData} />
          <Strip stripData={stripOne} />
          <MatterDesignFourthSection fourthSectionData={fourthSectionData} />
          <MatterDesignFifthSection fifthSectionData={fifthSectionData} />
          <Strip stripData={stripTwo} />
          <MatterDesignContactUs contactUsData={contactUsData}/>
        </Block>
      </Container>
    </main>
  );
};

export default MatterDesignSystemContainer;
