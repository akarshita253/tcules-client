import Section from "@/components/global/Section";
import { ResourceQuery } from "@/lib/codegen/graphql";
import ResourcesCaseStudies from "./ResourcesCaseStudies";
import ApolloWrapper from "@/lib/providers/ApolloWrapper";

const TculesResources = ({
  thirdSectionData,
}: {
  thirdSectionData: NonNullable<ResourceQuery["resource"]>["thirdSection"];
}) => {
  return (
    <Section>
      <h2 className="text-heading-xs text-neutral-800 mb-6">
        {thirdSectionData?.heading}
      </h2>
      <ApolloWrapper>
        <ResourcesCaseStudies/>
      </ApolloWrapper>
    </Section>
  );
};

export default TculesResources;
