export const dynamic = "force-dynamic";

import { Cards } from "@/components/shared/Cards";
import { AllCaseStudiesQuery } from "@/features/case_studies/types/caseStudyTypes";
import { strapiRequest } from "@/lib/utils";
import Link from "next/link";
import { GET_ALL_CASE_STUDIES } from "@/lib/queries/getCaseStudies";

const CaseStudyList = async () => {
  const data = await strapiRequest<AllCaseStudiesQuery>(GET_ALL_CASE_STUDIES);
  const allCaseStudies = data?.caseStudies;
  return (
    <main>
      {allCaseStudies?.map((caseStudy) => {
        const imageUrl = {
          url: caseStudy.thumbnail?.url || "",
          alternativeText: caseStudy.thumbnail?.alternativeText || "",
          width: caseStudy.thumbnail?.width ? parseInt(caseStudy.thumbnail.width, 10) : undefined,
          height: caseStudy.thumbnail?.height ? parseInt(caseStudy.thumbnail.height, 10) : undefined
        };
        return (
          <Link key={caseStudy.slug} href={`/case-studies/${caseStudy.slug}`}>
            <Cards
              title={caseStudy.title || ""}
              createdAt={caseStudy.publishedAt}
              description={caseStudy.description || ""}
              imageUrl={imageUrl}
            />
          </Link>
        );  
      })}
    </main>
  );
};

export default CaseStudyList;