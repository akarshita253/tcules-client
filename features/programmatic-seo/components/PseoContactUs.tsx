import Section from "@/components/global/Section";
import { ProgrammaticSeoPagesQuery } from "@/lib/codegen/graphql";
import ApolloWrapper from "@/lib/providers/ApolloWrapper";
import PseoContactUsForm from "./PseoContactUsForm";

const PseoContactUs = ({
  contactUsData,
}: {
  contactUsData: NonNullable<
    ProgrammaticSeoPagesQuery["programmaticSeoPages"][number]
  >["contactUs"];
}) => {
  return (
    <Section>
      <h2 className="text-center mb-11">
        <span className="text-heading-sm text-neutral-800">
          {contactUsData?.heading?.split("|")[0]}
        </span>
        <span className="text-display-xs text-accent-600">
          {contactUsData?.heading?.split("|")[1]}
        </span>
      </h2>
      <ApolloWrapper>
        <PseoContactUsForm />
      </ApolloWrapper>
    </Section>
  );
};

export default PseoContactUs;
