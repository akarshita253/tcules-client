import LabsContainer from "@/features/labs/LabsContainer";
import { LabSingleTypeQuery } from "@/lib/codegen/graphql";
import { generateSeoMetadata } from "@/lib/data/generateSeoMetaData";
import { getStrapiPage } from "@/lib/data/getStrapiPage";
import { LABS_SINGLE_TYPE } from "@/lib/queries/getLabs";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return generateSeoMetadata({
    getSeo: async () => {
      const pageData = await getStrapiPage<
        LabSingleTypeQuery,
        LabSingleTypeQuery["labSingleType"]
      >({
        query: LABS_SINGLE_TYPE,
        extract: (res) => res.labSingleType,
      });

      return pageData?.seo;
    },
  });
}

const LabsLandingPage = async () => {
  const labsData = await getStrapiPage<LabSingleTypeQuery, LabSingleTypeQuery>({
    query: LABS_SINGLE_TYPE,
    extract: (res) => res,
  });
  if (!labsData) return null;
  return (
    <>
      {labsData?.labSingleType?.seo?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(labsData?.labSingleType.seo.structuredData),
          }}
        />
      )}
      {labsData?.labSingleType?.seo?.codeJson && (
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: labsData?.labSingleType.seo.codeJson,
          }}
        />
      )}
      <LabsContainer labsData={labsData} />
    </>
  );
};

export default LabsLandingPage;
