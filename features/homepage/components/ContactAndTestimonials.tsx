import Image from "next/image";
import quote from "@/public/quote.svg";
import Section from "@/components/global/Section";
import { HomepageQuery, TestimonialsQuery } from "@/lib/codegen/graphql";
import { TESTIMONIALS_QUERY } from "@/lib/queries/getTestimonials";
import { strapiRequest } from "@/lib/utils";
import ContactForm from "@/components/shared/ContactForm";
import ApolloWrapper from "@/lib/providers/ApolloWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

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
      <h2 className="sm:mb-11 mb-6 text-center">
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
      <div className="shadow-[0_4px_45.1px_0_rgba(0,0,0,0.05)] rounded-xl sm:w-3/5 mx-auto p-8">
        <Carousel>
          <CarouselContent>
            {testimonialData &&
              testimonialData.map((singleTestimonial, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className="cursor-pointer"
                  >
                    <Card  className="">
                      <CardContent>
                        <Image src={quote} alt="quote" className="mb-6" />
                        <p className="text-label-xl text-neutral-700 mb-6 sm:mb-9">
                          {singleTestimonial?.clientComments}
                        </p>
                        <p className="text-label-md text-neutral-900 font-semibold">
                          {singleTestimonial?.clientName}
                        </p>
                        <p className="text-label-2xs text-neutral-700">
                          {singleTestimonial?.clientPosition}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
          </CarouselContent>
        </Carousel>
      </div>
    </Section>
  );
};

export default ContactAndTestimonials;
