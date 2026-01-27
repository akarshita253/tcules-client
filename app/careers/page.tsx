import CareerContainer from "@/features/career/CareerContainer";
import { CareerQuery } from "@/lib/codegen/graphql";
import { generateSeoMetadata } from "@/lib/data/generateSeoMetaData";
import { getStrapiPage } from "@/lib/data/getStrapiPage";
import { CAREER_QUERY } from "@/lib/queries/career";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return generateSeoMetadata({
    getSeo: async () => {
      const pageData = await getStrapiPage<CareerQuery, CareerQuery["career"]>({
        query: CAREER_QUERY,
        extract: (res) => res.career,
      });

      return pageData?.seo;
    },
  });
}

const CareerLandingPage = async () => {

    const careerData = await getStrapiPage<
      CareerQuery,
      CareerQuery["career"]
    >({
      query: CAREER_QUERY,
      extract: (res) => res?.career,
    });

  if (!careerData) return null;
  return (
    <>
     {careerData?.seo?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(careerData.seo.structuredData),
          }}
        />
      )}
      {careerData?.seo?.codeJson && (
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: careerData.seo.codeJson,
          }}
        />
      )}
      <CareerContainer careerData={careerData} />
    </>
  );
};

export default CareerLandingPage;
