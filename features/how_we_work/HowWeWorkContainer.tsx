import { Block } from "@/components/global/Block";
import { Container } from "@/components/global/Container";
import HowWeWorkHeroSec from "./components/HowWeWorkHeroSec";
import ChooseRightStartingPointSec from "./components/ChooseRightStartingPointSec";
import LowFrictionWaysSec from "./components/LowFrictionWaysSec";
import Miscellaneous from "@/components/shared/Miscellaneous";
import { HowWeWorkQuery } from "@/lib/codegen/graphql";

const HowWeWorkContainer = ({
  howWeWorkData,
}: {
  howWeWorkData: NonNullable<HowWeWorkQuery>;
}) => {
  const heroSectionData = howWeWorkData.howWeWork?.heroSection;
  const rightStartingPointData = howWeWorkData.howWeWork?.secondSection;
  const lowFrictionWaysData = howWeWorkData.howWeWork?.thirdSection;
  const miscData = howWeWorkData.howWeWork?.miscSection;

  return (
    <main>
      <Container className="md:grid grid-cols-12 gap-6">
        <Block className="lg:col-start-2 col-start-1 lg:col-end-12 col-end-13">
          <HowWeWorkHeroSec heroSectionData={heroSectionData} />
          {rightStartingPointData && (
            <ChooseRightStartingPointSec
              rightStartingPointData={rightStartingPointData}
            />
          )}
        </Block>
      </Container>
      <div className="bg-neutral-100">
        {lowFrictionWaysData && (
          <LowFrictionWaysSec lowFrictionWaysData={lowFrictionWaysData} />
        )}
      </div>
      <Container className="md:grid grid-cols-12 gap-6">
        <Block className="lg:col-start-2 col-start-1 lg:col-end-12 col-end-13">
          <Miscellaneous miscSectionData={miscData} />
        </Block>
      </Container>
    </main>
  );
};

export default HowWeWorkContainer;
