import { Block } from "@/components/global/Block";
import { Container } from "@/components/global/Container";
import WhyTeamHireUs from "./components/WhyTeamHireUs";
import ServiceHeroSection from "./components/ServiceHeroSec";
import WhatWeDesign from "./components/WhatWeDesign";
import HowWeWork from "./components/HowWeWork";
import OperatingPhilosophy from "./components/OperatingPhilosophy";
import ExploreRecentWork from "./components/ExploreRecentWork";
import ServiceMisc from "./components/ServiceMisc";
import { ServiceQuery } from "@/lib/codegen/graphql";

const ServiceContainer = ({service}:{service: NonNullable<ServiceQuery["service"]>}) => {

  const HERO_SECTION = service.hero;
  const WHY_TEAM_HIRE_SECTION = service.whyTeamHireSection;
  const WHAT_WE_DESIGN_SECTION = service.whatWeDesignSection;
  const HOW_WE_WORK_SECTION = service.howWeWorkSection;
  const OPERATING_PHILOSOPHY_SECTION = service.operatingPhilosophySection;
  const RECENT_WORK_SECTION = service.recentWorkSection;
  const SERVICE_MISC_SECTION = service.miscSection;

  if (!service) {
    return <h1>No data</h1>;
  }

  return (
    <main>
      <Container className="md:grid grid-cols-12 gap-6">
        <Block className="lg:col-start-2 col-start-1 lg:col-end-12 col-end-13">
            <ServiceHeroSection heroSectionData={HERO_SECTION}/>
            <WhyTeamHireUs whyTeamHireSectionData={WHY_TEAM_HIRE_SECTION} />
            <WhatWeDesign whatWeDesignSectionData={WHAT_WE_DESIGN_SECTION} />
            <HowWeWork howWeWorkSectionData={HOW_WE_WORK_SECTION} />
            <OperatingPhilosophy operatingPhilosophySectionData={OPERATING_PHILOSOPHY_SECTION} />
            <ExploreRecentWork recentWorkSectionData={RECENT_WORK_SECTION} />
            <ServiceMisc miscSectionData={SERVICE_MISC_SECTION} />
        </Block>
      </Container>
    </main>
  );
};

export default ServiceContainer;
