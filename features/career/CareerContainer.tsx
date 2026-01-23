import { Block } from "@/components/global/Block";
import { Container } from "@/components/global/Container";
import Section from "@/components/global/Section";
import { CareerQuery } from "@/lib/codegen/graphql";
import CareerSecondSection from "./components/CareerSecondSection";
import CareerThirdSection from "./components/CareerThirdSection";
import CareerFourthSection from "./components/CareerFourthSection";

const CareerContainer = ({
  careerData,
}: {
  careerData: NonNullable<CareerQuery["career"]>;
}) => {
  const secondSectionData = careerData?.secondSection;
  const thirdSectionData = careerData?.thirdSection;
  const fourthSectionData = careerData?.fourthSection;
  return (
    <main className="bg-neutral-100">
      <Container className="md:grid grid-cols-12 gap-6">
        <Block className="lg:col-start-2 col-start-1 lg:col-end-12 col-end-13">
          <Section>
            <h1 className="text-center mx-auto md:w-4/5 mb-6">
              {careerData?.heading?.split("|").map((item, index) => (
                <span
                  key={index}
                  className={`${
                    index % 2 === 0
                      ? "text-accent-500 text-display-sm"
                      : "text-neutral-800 text-heading-md"
                  }`}
                >
                  {item}
                </span>
              ))}
            </h1>
            <p className="text-label-xl text-neutral-700 text-center">
              {careerData?.description}
            </p>
          </Section>
          <CareerSecondSection secondSectionData={secondSectionData} />
          <CareerThirdSection thirdSectionData={thirdSectionData} />
          <CareerFourthSection fourthSectionData={fourthSectionData} />
        </Block>
      </Container>
    </main>
  );
};

export default CareerContainer;
