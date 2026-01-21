import { Block } from "@/components/global/Block";
import { Container } from "@/components/global/Container";
import { LabSingleTypeQuery } from "@/lib/codegen/graphql";
import LabsHeroSec from "./components/LabsHeroSec";
import SecondSection from "./components/SecondSection";
// import LabsMiscSection from "./components/LabsMiscSection";
import ThirdSection from "./components/ThirdSection";
import Breadcrumbs from "@/components/global/Breadcrumbs";
import InterfaceLabsSection from "./components/InterfaceLabsSection";

type LabsCardSection = Extract<
  NonNullable<
    NonNullable<LabSingleTypeQuery["labSingleType"]>["detailSection"]
  >[number],
  { __typename: "ComponentLabsCardSection" }
>;

const LabsContainer = ({ labsData }: { labsData: LabSingleTypeQuery }) => {
  const heroSectionData = labsData.labSingleType?.heroSection;
  // const labsMiscData = labsData.labSingleType?.miscSection;
  const labsInterfaceSection = labsData.labSingleType?.interfaceLabs;
  const cardsData = labsData.labSingleType?.detailSection?.filter(
    (section) => section?.__typename === "ComponentLabsCardSection",
  ) as LabsCardSection[];
  return (
    <main className="bg-neutral-900">
      <Container className="md:grid grid-cols-12 gap-6">
        <Block className="lg:col-start-2 col-start-1 lg:col-end-12 col-end-13">
          <Breadcrumbs className="md:mb-0 mb-0 py-2" />
          <LabsHeroSec heroSectionData={heroSectionData} />
          <SecondSection cardsData={cardsData} />
          <ThirdSection cardsData={cardsData} />
          {/* {labsMiscData && <LabsMiscSection labsMiscData={labsMiscData} />} */}
          {labsInterfaceSection && (
            <InterfaceLabsSection labsInterfaceSection={labsInterfaceSection} />
          )}
        </Block>
      </Container>
    </main>
  );
};

export default LabsContainer;
