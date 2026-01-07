import Section from "@/components/global/Section";
import { MatterDesignSystemQuery } from "@/lib/codegen/graphql";
import ApolloWrapper from "@/lib/providers/ApolloWrapper";
import Image from "next/image";
import MatterDesignContactForm from "./MatterDesignContactForm";

const MatterDesignContactUs = ({
  contactUsData,
}: {
  contactUsData: NonNullable<
    MatterDesignSystemQuery["matterDesignSystem"]
  >["contactUs"];
}) => {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      <div className="p-8">
        <div className="mb-8 md:mb-16">
          {contactUsData?.icon?.url && (
            <Image
              src={contactUsData?.icon?.url}
              width={144}
              height={144}
              alt={contactUsData?.icon?.alternativeText || "contact-form-icon"}
            />
          )}
        </div>
        <h2 className="text-heading-md text-neutral-50">
          {contactUsData?.headingOne}
        </h2>
        <h2 className="text-display-sm text-accent-500 mb-4">
          {contactUsData?.headingTwo}
        </h2>
        <p className="text-neutral-50 text-label-xl">
          {contactUsData?.description}
        </p>
      </div>
      <div className="p-8 bg-neutral-50 rounded-xl">
        <ApolloWrapper>
          <MatterDesignContactForm />
        </ApolloWrapper>
      </div>
    </Section>
  );
};

export default MatterDesignContactUs;
