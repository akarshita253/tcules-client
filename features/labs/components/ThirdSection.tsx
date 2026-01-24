import Section from "@/components/global/Section";
import { LabSingleTypeQuery } from "@/lib/codegen/graphql";
import LabsCaseStudies from "./LabsCaseStudies";
import ApolloWrapper from "@/lib/providers/ApolloWrapper";

type LabsCardSection = Extract<
  NonNullable<
    NonNullable<LabSingleTypeQuery["labSingleType"]>["detailSection"]
  >[number],
  { __typename: "ComponentLabsCardSection" }
>;

const ThirdSection = ({ cardsData }: { cardsData?: LabsCardSection[] }) => {
  const thirdSectionData = cardsData?.[1];
  return (
    <Section className="flex flex-col justify-between gap-4 sm:gap-6">
      <h2 className="text-heading-xs  text-neutral-100 mb-6 sm:mb-12">
        {thirdSectionData?.heading}
      </h2>
      <ApolloWrapper>
        <LabsCaseStudies />
      </ApolloWrapper>
    </Section>
  );
};

export default ThirdSection;
