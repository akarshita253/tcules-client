import CapablityContainer from "@/features/capablity/main/CapablityContainer";
import { CapablityQuery } from "@/lib/codegen/graphql";
import { generateSeoMetadata } from "@/lib/data/generateSeoMetaData";
import { getStrapiPage } from "@/lib/data/getStrapiPage";
import { CAPABLITIES_QUERY } from "@/lib/queries/capablities";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return generateSeoMetadata({
    getSeo: async () => {
      const pageData = await getStrapiPage<
        CapablityQuery,
        CapablityQuery["capablity"]
      >({
        query: CAPABLITIES_QUERY,
        extract: (res) => res.capablity,
      });

      return pageData?.seo;
    },
  });
}

const CapablityLandingPage = async () => {
  const capablityData = await getStrapiPage<
    CapablityQuery,
    CapablityQuery["capablity"]
  >({
    query: CAPABLITIES_QUERY,
    extract: (res) => res?.capablity,
  });
  if (!capablityData?.capablitiesSingleType) return null;
  return (
    <>
     {capablityData?.seo?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(capablityData.seo.structuredData),
          }}
        />
      )}
      {capablityData?.seo?.codeJson && (
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: capablityData.seo.codeJson,
          }}
        />
      )}
      <CapablityContainer capablityData={capablityData?.capablitiesSingleType} />;
    </>
  );
};

export default CapablityLandingPage;
