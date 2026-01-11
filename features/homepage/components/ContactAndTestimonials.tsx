import Section from "@/components/global/Section";
import { HomepageQuery, TestimonialsQuery } from "@/lib/codegen/graphql";
import { TESTIMONIALS_QUERY } from "@/lib/queries/getTestimonials";
import { strapiRequest } from "@/lib/utils";
import ContactForm from "@/components/shared/ContactForm";
import ApolloWrapper from "@/lib/providers/ApolloWrapper";
import TestimonialCarousel from "./TestimonialCarousel";

const ContactAndTestimonials = async ({
  contactSectionData,
}: {
  contactSectionData: NonNullable<HomepageQuery["homepage"]>["contactSection"];
}) => {
  const testimonialResponse = await strapiRequest<TestimonialsQuery>(
    TESTIMONIALS_QUERY
  );
  const testimonialData = testimonialResponse?.testimonials;
  return (
    <Section>
      <h2 className="sm:mb-11 mb-6 lg:text-center">
        <span className="text-heading-sm text-neutral-900">
          {contactSectionData?.heading?.split("|")[0]}
        </span>
        <span className="text-display-xs text-accent-600">
          {contactSectionData?.heading?.split("|")[1]}
        </span>
      </h2>
      <ApolloWrapper>
        <ContactForm />
      </ApolloWrapper>
      <TestimonialCarousel testimonialData={testimonialData} />
    </Section>
  );
};

export default ContactAndTestimonials;
