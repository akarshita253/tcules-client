import LabsFilContainer from "@/features/labs_fil/LabsFilContainer";
import { LabsFilLandingPageQuery } from "@/lib/codegen/graphql";
import { generateSeoMetadata } from "@/lib/data/generateSeoMetaData";
import { getStrapiPage } from "@/lib/data/getStrapiPage";
import { GET_LABS_FIL_QUERY } from "@/lib/queries/labsFil";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return generateSeoMetadata({
    getSeo: async () => {
      const pageData = await getStrapiPage<
        LabsFilLandingPageQuery,
        LabsFilLandingPageQuery["labsFilLandingPage"]
      >({
        query: GET_LABS_FIL_QUERY,
        extract: (res) => res.labsFilLandingPage,
      });

      return pageData?.seo;
    },
  });
}


const LabsFIL = async () => {

    const labsFilData = await getStrapiPage<
      LabsFilLandingPageQuery,
      LabsFilLandingPageQuery["labsFilLandingPage"]
    >({
      query: GET_LABS_FIL_QUERY,
      extract: (res) => res?.labsFilLandingPage,
    });

  return (
    <>
      {labsFilData?.seo?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(labsFilData.seo.structuredData),
          }}
        />
      )}
      {labsFilData?.seo?.codeJson && (
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: labsFilData.seo.codeJson,
          }}
        />
      )}
      <LabsFilContainer labsFilData={labsFilData} />;
    </>
  );
};

export default LabsFIL;
