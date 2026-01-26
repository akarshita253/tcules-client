import ResourceContainer from "@/features/resource/ResourceContainer";
import { ResourceQuery } from "@/lib/codegen/graphql";
import { generateSeoMetadata } from "@/lib/data/generateSeoMetaData";
import { getStrapiPage } from "@/lib/data/getStrapiPage";
import { RESOURCES_QUERY } from "@/lib/queries/resources";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return generateSeoMetadata({
    getSeo: async () => {
      const pageData = await getStrapiPage<
        ResourceQuery,
        ResourceQuery["resource"]
      >({
        query: RESOURCES_QUERY,
        extract: (res) => res.resource,
      });

      return pageData?.seo;
    },
  });
}

const Resource = async () => {
  const resourceData = await getStrapiPage<
    ResourceQuery,
    ResourceQuery["resource"]
  >({
    query: RESOURCES_QUERY,
    extract: (res) => res?.resource,
  });

  if (!resourceData) return null;
  return (
    <>
     {resourceData?.seo?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(resourceData.seo.structuredData),
          }}
        />
      )}
      {resourceData?.seo?.codeJson && (
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: resourceData.seo.codeJson,
          }}
        />
      )}
      <ResourceContainer resourceData={resourceData} />
    </>
  );
};

export default Resource;
