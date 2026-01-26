import HowWeWorkContainer from "@/features/how_we_work/HowWeWorkContainer";
import { HowWeWorkQuery } from "@/lib/codegen/graphql";
import { generateSeoMetadata } from "@/lib/data/generateSeoMetaData";
import { getStrapiPage } from "@/lib/data/getStrapiPage";
import { HOW_WE_WORK } from "@/lib/queries/howWeWork";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return generateSeoMetadata({
    getSeo: async () => {
      const pageData = await getStrapiPage<
        HowWeWorkQuery,
        HowWeWorkQuery["howWeWork"]
      >({
        query: HOW_WE_WORK,
        extract: (res) => res.howWeWork,
      });

      return pageData?.seo;
    },
  });
}


const HowWeWork = async () => {
  const response = await getStrapiPage<
    HowWeWorkQuery,
    HowWeWorkQuery
  >({
    query: HOW_WE_WORK,
    extract: (res) => res
  });

  if(!response) {
    return null;
  }

  return (
    <>
      {response?.howWeWork?.seo?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(response?.howWeWork.seo.structuredData),
          }}
        />
      )}
      {response?.howWeWork?.seo?.codeJson && (
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: response?.howWeWork.seo.codeJson,
          }}
        />
      )}
      <HowWeWorkContainer howWeWorkData={response} />;
    </>
  );
};

export default HowWeWork;
