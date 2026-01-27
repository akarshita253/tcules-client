import AboutContainer from "@/features/about/AboutContainer";
import { AboutQuery } from "@/lib/codegen/graphql";
import { generateSeoMetadata } from "@/lib/data/generateSeoMetaData";
import { getStrapiPage } from "@/lib/data/getStrapiPage";
import { ABOUT_QUERY } from "@/lib/queries/about";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return generateSeoMetadata({
    getSeo: async () => {
      const pageData = await getStrapiPage<
        AboutQuery,
        AboutQuery["about"]
      >({
        query: ABOUT_QUERY,
        extract: (res) => res.about,
      });

      return pageData?.seo;
    },
  });
}

const AboutLandingPage = async () => {
  const aboutData = await getStrapiPage<AboutQuery, AboutQuery["about"]>({
    query: ABOUT_QUERY,
    extract: (res) => res?.about,
  });

  if (!aboutData) return null;
  return (
    <>
      {aboutData?.seo?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(aboutData.seo.structuredData),
          }}
        />
      )}
      {aboutData?.seo?.codeJson && (
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: aboutData.seo.codeJson,
          }}
        />
      )}
      <AboutContainer aboutData={aboutData!} />
    </>
  );
};

export default AboutLandingPage;
