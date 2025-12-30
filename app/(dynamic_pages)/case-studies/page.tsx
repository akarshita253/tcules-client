import CaseStudyListingContainer from "@/features/case_studies/listing/CaseStudyListingContainer";
import { CaseStudyLandingPageQuery } from "@/lib/codegen/graphql";
import { GET_CASESTUDY_LANDING_PAGE_DATA } from "@/lib/queries/getCaseStudies";
import { strapiRequest } from "@/lib/utils";
import { notFound } from "next/navigation";

const CaseStudyList = async () => {

  const response = await strapiRequest<CaseStudyLandingPageQuery>(GET_CASESTUDY_LANDING_PAGE_DATA);
const caseStudyLandingPageData = response.caseStudyLandingPage;

  if (!response) {
    notFound();
  }

  return (
    <main>
      <CaseStudyListingContainer caseStudyLandingPageData={caseStudyLandingPageData!}/>
    </main>
  );
};

export default CaseStudyList;
