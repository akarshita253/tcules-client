import { Block } from "@/components/global/Block";
import { Container } from "@/components/global/Container";
import { LabsFilLandingPageQuery } from "@/lib/codegen/graphql";
import React from "react";
import LabsFilSecondSection from "./components/LabsFilSecondSection";
import LabsFilHeroSection from "./components/LabsFilHeroSection";
import LabsFilThirdSection from "./components/LabsFilThirdSection";
import LabsFilFourthSection from "./components/LabsFilFourthSection";
import LabsFilFifthSection from "./components/LabsFilFifthSection";
import LabsFilSixthSection from "./components/LabsFilSixthSection";
import LabsFilSeventhSection from "./components/LabsFilSeventhSection";
import LabsFilEighthSection from "./components/LabsFilEighthSection";

const LabsFilContainer = ({
  labsFilData,
}: {
  labsFilData: NonNullable<LabsFilLandingPageQuery>["labsFilLandingPage"];
}) => {
  const heroSectionData = labsFilData?.heroSection;
  const secondSectionData = labsFilData?.secondSection;
  const thirdSectionData = labsFilData?.thirdSection;
  const fourthSectionData = labsFilData?.fourthSection;
  const fifthSectionData = labsFilData?.fifthSection;
  const sixthSectionData = labsFilData?.sixthSection;
  const seventhSectionData = labsFilData?.seventhSection;
  const eighthSectionData = labsFilData?.eighthSection;
  return (
    <main className="bg-neutral-900">
      <Container className="md:grid grid-cols-12 gap-6">
        <Block className="lg:col-start-2 col-start-1 lg:col-end-12 col-end-13">
          <LabsFilHeroSection heroSectionData={heroSectionData} />
          {secondSectionData && (
            <LabsFilSecondSection secondSectionData={secondSectionData} />
          )}
          {thirdSectionData && (
            <LabsFilThirdSection thirdSectionData={thirdSectionData} />
          )}
          {fourthSectionData && (
            <LabsFilFourthSection fourthSectionData={fourthSectionData} />
          )}
          {fifthSectionData && (
            <LabsFilFifthSection fifthSectionData={fifthSectionData} />
          )}
          {sixthSectionData && <LabsFilSixthSection sixthSectionData={sixthSectionData}/>}
          {seventhSectionData && <LabsFilSeventhSection seventhSectionData={seventhSectionData}/>}
          {eighthSectionData&& <LabsFilEighthSection eighthSectionData={eighthSectionData}/>}
        </Block>
      </Container>
    </main>
  );
};

export default LabsFilContainer;
