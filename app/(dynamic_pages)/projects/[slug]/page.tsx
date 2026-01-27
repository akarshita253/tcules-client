import CaseStudyContainer from "@/features/case_studies/CaseStudyContainer";
import { CaseStudiesQuery } from "@/lib/codegen/graphql";
import { generateSeoMetadata } from "@/lib/data/generateSeoMetaData";
import { getStrapiPage } from "@/lib/data/getStrapiPage";
import { CASE_STUDY_QUERY } from "@/lib/queries/getCaseStudies";
import { Metadata } from "next";
import { notFound } from "next/navigation";

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
        CaseStudiesQuery,
        CaseStudiesQuery["caseStudies"][number]
      >({
        query: CASE_STUDY_QUERY,
        variables: { slug },
        extract: (res) => res.caseStudies[0] ?? null,
      });

      return pageData?.seo;
    },
  });
}

const SingleCaseStudy = async ({ params }: PageProps) => {
  const { slug } = await params;
console.log(slug,"this is slug")
  const caseStudy = await getStrapiPage<
    CaseStudiesQuery,
    CaseStudiesQuery["caseStudies"][0]
  >({
    query: CASE_STUDY_QUERY,
    variables: { slug },
    extract: (res) => res?.caseStudies[0],
  });

  if (!caseStudy) {
    notFound();
  }
  return (
    <>
      {caseStudy?.seo?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(caseStudy?.seo.structuredData),
          }}
        />
      )}
      {caseStudy?.seo?.codeJson && (
        <script
          dangerouslySetInnerHTML={{ __html: caseStudy?.seo.codeJson }}
        />
      )}
      <CaseStudyContainer caseStudy={caseStudy!} />
    </>
  );
};

export default SingleCaseStudy;
