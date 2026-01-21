import PseoContainer from "@/features/programmatic-seo/PseoContainer";
import {
  ProgrammaticSeoPagesQuery,
  TestimonialsQuery,
} from "@/lib/codegen/graphql";
import { GET_PSP_DATA } from "@/lib/queries/getPspData";
import { TESTIMONIALS_QUERY } from "@/lib/queries/getTestimonials";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getStrapiPage } from "@/lib/data/getStrapiPage";
import { generateSeoMetadata } from "@/lib/data/generateSeoMetaData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  return generateSeoMetadata({
    getSeo: async () => {
      const pageData = await getStrapiPage<
        ProgrammaticSeoPagesQuery,
        ProgrammaticSeoPagesQuery["programmaticSeoPages"][number]
      >({
        query: GET_PSP_DATA,
        variables: { filters: { slug: { eq: slug } } },
        extract: (res) => res.programmaticSeoPages[0] ?? null,
      });

      return pageData?.seo;
    },
  });
}

const SingleProgramaticLandingPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  const pSeoPageData = await getStrapiPage<
    ProgrammaticSeoPagesQuery,
    ProgrammaticSeoPagesQuery["programmaticSeoPages"][0]
  >({
    query: GET_PSP_DATA,
    variables: { filters: { slug: { eq: slug } } },
    extract: (res) => res?.programmaticSeoPages[0],
  });

  const testimonialData = await getStrapiPage<
    TestimonialsQuery,
    TestimonialsQuery["testimonials"]
  >({
    query: TESTIMONIALS_QUERY,
    extract: (res) => res?.testimonials,
  });

  if (!pSeoPageData) {
    notFound();
  }

  return (
    <>
      {pSeoPageData?.seo?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pSeoPageData?.seo.structuredData),
          }}
        />
      )}

      {pSeoPageData?.seo?.codeJson && (
        <script dangerouslySetInnerHTML={{ __html: pSeoPageData?.seo.codeJson }} />
      )}

      <PseoContainer
        testimonialData={testimonialData ?? []}
        programaticLandingPageData={pSeoPageData}
      />
    </>
  );
};

export default SingleProgramaticLandingPage;
