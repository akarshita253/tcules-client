export const dynamic = "force-dynamic";

import CaseStudyContainer from "@/features/case_studies/CaseStudyContainer";
import { CaseStudiesQuery } from "@/lib/codegen/graphql";
import { CASE_STUDY_QUERY } from "@/lib/queries/getCaseStudies";
import { strapiRequest } from "@/lib/utils";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const SingleCaseStudy = async ({ params }: PageProps) => {
  const { slug } = await params;
  const data = await strapiRequest<CaseStudiesQuery>(CASE_STUDY_QUERY, { slug });
  const caseStudy = data?.caseStudies[0];
  return <CaseStudyContainer caseStudy={caseStudy!}/>;
};

export default SingleCaseStudy;
