import { HomepageQuery } from "@/lib/codegen/graphql";
import { HOME_PAGE_QUERY } from "@/lib/queries/getHomepage";
import HomePageContainer from "@/features/homepage/HomePageContainer";
import { getStrapiPage } from "@/lib/data/getStrapiPage";
import { generateSeoMetadata } from "@/lib/data/generateSeoMetaData";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return generateSeoMetadata({
    getSeo: async () => {
      const pageData = await getStrapiPage<
        HomepageQuery,
        HomepageQuery["homepage"]
      >({
        query: HOME_PAGE_QUERY,
        extract: (res) => res.homepage,
      });

      return pageData?.seo;
    },
  });
}

const Homepage = async () => {
  const homepageData = await getStrapiPage<
    HomepageQuery,
    HomepageQuery["homepage"]
  >({
    query: HOME_PAGE_QUERY,
    extract: (res) => res?.homepage,
  });

  return (
    <>
      {homepageData?.seo?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(homepageData.seo.structuredData),
          }}
        />
      )}
      {homepageData?.seo?.codeJson && (
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: homepageData.seo.codeJson,
          }}
        />
      )}
      <HomePageContainer homepageData={homepageData!} />
    </>
  );
};

export default Homepage;
