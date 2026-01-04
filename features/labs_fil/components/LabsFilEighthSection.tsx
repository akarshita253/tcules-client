import Section from "@/components/global/Section";
import { LabsFilLandingPageQuery } from "@/lib/codegen/graphql";
import Image from "next/image";
import LabsFilContactForm from "./LabsFilContactForm";
import ApolloWrapper from "@/lib/providers/ApolloWrapper";

const LabsFilEighthSection = ({
  eighthSectionData,
}: {
  eighthSectionData: NonNullable<
    LabsFilLandingPageQuery["labsFilLandingPage"]
  >["eighthSection"];
}) => {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      <div className="p-8">
        <div className="mb-8 md:mb-16">
          {eighthSectionData?.icon?.url && (
            <Image
              src={eighthSectionData?.icon?.url}
              width={144}
              height={144}
              alt={
                eighthSectionData?.icon?.alternativeText || "contact-form-icon"
              }
            />
          )}
        </div>
        <h2 className="flex flex-col mb-4">
          <span className="text-heading-md text-neutral-50">
            {eighthSectionData?.heading?.split("|").at(0)}
          </span>
          <span className="text-display-sm text-accent-500">
            {eighthSectionData?.heading?.split("|").at(1)}
          </span>
        </h2>
        <p className="text-neutral-50 text-label-xl">
          {eighthSectionData?.description}
        </p>
      </div>
      <div className="p-8 bg-neutral-800 rounded-xl">
        <ApolloWrapper>
          <LabsFilContactForm />
        </ApolloWrapper>
      </div>
    </Section>
  );
};

export default LabsFilEighthSection;
