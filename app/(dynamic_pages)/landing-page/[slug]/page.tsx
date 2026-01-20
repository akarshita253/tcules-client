import PseoContainer from "@/features/programmatic-seo/PseoContainer";
import {
  ProgrammaticSeoPagesQuery,
  TestimonialsQuery,
} from "@/lib/codegen/graphql";
import { GET_PSP_DATA } from "@/lib/queries/getPspData";
import { TESTIMONIALS_QUERY } from "@/lib/queries/getTestimonials";
import { strapiRequest } from "@/lib/utils";
import { notFound } from "next/navigation";
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}
const SingleProgramaticLandingPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const response = await strapiRequest<ProgrammaticSeoPagesQuery>(
    GET_PSP_DATA,
    {
      filters: {
        slug: {
          eq: slug,
        },
      },
    },
  );
  const programaticLandingPageData = response.programmaticSeoPages.at(0);
  const testimonialResponse =
    await strapiRequest<TestimonialsQuery>(TESTIMONIALS_QUERY);
  const testimonialData = testimonialResponse?.testimonials;
  if (!programaticLandingPageData) {
    notFound();
  }
  return (
    <PseoContainer
      testimonialData={testimonialData}
      programaticLandingPageData={programaticLandingPageData}
    />
  );
};

export default SingleProgramaticLandingPage;
