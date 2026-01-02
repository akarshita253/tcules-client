import Image from "next/image";
import quote from "@/public/quote.svg";
import Section from "@/components/global/Section";
import { HomepageQuery, TestimonialsQuery } from "@/lib/codegen/graphql";
import { TESTIMONIALS_QUERY } from "@/lib/queries/getTestimonials";
import { strapiRequest } from "@/lib/utils";
import ContactForm from "@/components/shared/ContactForm";
import ApolloWrapper from "@/lib/providers/ApolloWrapper";

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
      <h2 className="sm:mb-11 mb-6">
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
      <div className="shadow-[0 4px 45.1px 0 rgba(0, 0, 0, 0.05)] p-8 bg-neutral-50 rounded-xl sm:w-3/5 mx-auto">
        <div className="">
          <Image src={quote} alt="quote" className="mb-6" />
          {testimonialData &&
            testimonialData.map((singleTestimonial, index) => {
              return (
                <div key={index}>
                  <p className="text-label-xl text-neutral-700 mb-6 sm:mb-9">
                    {singleTestimonial?.clientComments}
                  </p>
                  <p className="text-label-md text-neutral-900 font-semibold">
                    {singleTestimonial?.clientName}
                  </p>
                  <p className="text-label-2xs text-neutral-700">
                    {singleTestimonial?.clientPosition}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </Section>
  );
};

export default ContactAndTestimonials;
