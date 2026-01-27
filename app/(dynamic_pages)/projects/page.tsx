import CaseStudyListingContainer from "@/features/case_studies/listing/CaseStudyListingContainer";
import { CaseStudyLandingPageQuery } from "@/lib/codegen/graphql";
import { generateSeoMetadata } from "@/lib/data/generateSeoMetaData";
import { getStrapiPage } from "@/lib/data/getStrapiPage";
import { GET_CASESTUDY_LANDING_PAGE_DATA } from "@/lib/queries/getCaseStudies";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  return generateSeoMetadata({
    getSeo: async () => {
      const pageData = await getStrapiPage<
        CaseStudyLandingPageQuery,
        CaseStudyLandingPageQuery["caseStudyLandingPage"]
      >({
        query: GET_CASESTUDY_LANDING_PAGE_DATA,
        extract: (res) => res.caseStudyLandingPage,
      });

      return pageData?.seo;
    },
  });
}

const CaseStudyList = async () => {
  const caseStudyLandingPageData = await getStrapiPage<
    CaseStudyLandingPageQuery,
    CaseStudyLandingPageQuery["caseStudyLandingPage"]
  >({
    query: GET_CASESTUDY_LANDING_PAGE_DATA,
    extract: (res) => res?.caseStudyLandingPage,
  });

  if (!caseStudyLandingPageData) {
    notFound();
  }

  return (
    <>
     {caseStudyLandingPageData?.seo?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(caseStudyLandingPageData.seo.structuredData),
          }}
        />
      )}
      {caseStudyLandingPageData?.seo?.codeJson && (
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: caseStudyLandingPageData.seo.codeJson,
          }}
        />
      )}
      <main>
        <CaseStudyListingContainer
          caseStudyLandingPageData={caseStudyLandingPageData!}
        />
      </main>
    </>
  );
};

export default CaseStudyList;
