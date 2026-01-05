import { Block } from "@/components/global/Block";
import { Container } from "@/components/global/Container";
import CapablitySharedIntroSec from "../shared/CapablitySharedIntroSec";
import { CapablityQuery } from "@/lib/codegen/graphql";
import HowWeWorkSection from "./components/HowWeWorkSection";
import EngineeringServiceSection from "./components/EngineeringServiceSection";
import AIServiceSection from "./components/AIServiceSection";
import CommonEntryPoint from "./components/CommonEntryPoint";
import DesignServiceSection from "./components/DesignServiceSection";

type CapabilityContainerProps = {
  capablityData: NonNullable<
    NonNullable<CapablityQuery["capablity"]>["capablitiesSingleType"]
  >;
};

export type CapablitiesHeroSection = Extract<
  NonNullable<
    NonNullable<CapablityQuery["capablity"]>["capablitiesSingleType"]
  >[number],
  { __typename: "ComponentServiceHeroSection" }
>;

export type CapablitiesCardSection = Extract<
  NonNullable<
    NonNullable<CapablityQuery["capablity"]>["capablitiesSingleType"]
  >[number],
  { __typename: "ComponentCapablitiesCapablitiesCardSection" }
>;

const CapablityContainer = ({ capablityData }: CapabilityContainerProps) => {
  const introSectionData = capablityData.filter(
    (item): item is CapablitiesHeroSection =>
      item?.__typename === "ComponentServiceHeroSection"
  );
  const heroSectionData = introSectionData.at(0);
  const bottomSectionData = introSectionData.at(1);
  const howWeWorkSectionData = capablityData.find(
    (section): section is CapablitiesCardSection =>
      section?.__typename === "ComponentCapablitiesCapablitiesCardSection" &&
      section.serviceName === "HowWeWork"
  );
  const designServiceSectionData = capablityData.find(
    (section): section is CapablitiesCardSection =>
      section?.__typename === "ComponentCapablitiesCapablitiesCardSection" &&
      section.serviceName === "Design"
  );
  const engineeringServiceSectionData = capablityData.find(
    (section): section is CapablitiesCardSection =>
      section?.__typename === "ComponentCapablitiesCapablitiesCardSection" &&
      section.serviceName === "Engineering"
  );
  const aiServiceSectionData = capablityData.find(
    (section): section is CapablitiesCardSection =>
      section?.__typename === "ComponentCapablitiesCapablitiesCardSection" &&
      section.serviceName === "AI"
  );
  const commonEntryPointSectionData = capablityData.find(
    (section): section is CapablitiesCardSection =>
      section?.__typename === "ComponentCapablitiesCapablitiesCardSection" &&
      section.serviceName === "CommonEntryPoints"
  );

  return (
    <main>
      <Container className="md:grid grid-cols-12 gap-6">
        <Block className="lg:col-start-2 col-start-1 lg:col-end-12 col-end-13">
          <CapablitySharedIntroSec introSectionData={heroSectionData} />
          {designServiceSectionData && <DesignServiceSection designServiceSectionData={designServiceSectionData} />}
          {howWeWorkSectionData && <HowWeWorkSection howWeWorkSectionData={howWeWorkSectionData} />}
          {engineeringServiceSectionData && <EngineeringServiceSection engineeringServiceSectionData={engineeringServiceSectionData} />}
          {aiServiceSectionData&& <AIServiceSection aiServiceSectionData={aiServiceSectionData}/>}
          {commonEntryPointSectionData && <CommonEntryPoint commonEntryPointSectionData={commonEntryPointSectionData}/>}
          <CapablitySharedIntroSec introSectionData={bottomSectionData} />
        </Block>
      </Container>
    </main>
  );
};

export default CapablityContainer;
