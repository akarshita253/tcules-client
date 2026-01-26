import ServiceContainer from "@/features/services/ServiceContainer";
import { CapablitiesSubPagesQuery } from "@/lib/codegen/graphql";
import { generateSeoMetadata } from "@/lib/data/generateSeoMetaData";
import { getStrapiPage } from "@/lib/data/getStrapiPage";
import { CAPABLITIES_SUB_PAGE_QUERY } from "@/lib/queries/getCapablitiesSubPages";
import { strapiRequest } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  return generateSeoMetadata({
    getSeo: async () => {
      const pageData = await getStrapiPage<
        CapablitiesSubPagesQuery,
        CapablitiesSubPagesQuery["capablitiesSubPages"][number]
      >({
        query: CAPABLITIES_SUB_PAGE_QUERY,
        variables: { filters: { slug: { eq: slug } } },
        extract: (res) => res.capablitiesSubPages[0] ?? null,
      });

      return pageData?.seo;
    },
  });
}

const CapablitiesSubPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const response = await strapiRequest<CapablitiesSubPagesQuery>(
    CAPABLITIES_SUB_PAGE_QUERY,
    {
      filters: {
        slug: {
          eq: slug,
        },
      },
    }
  );

    const capablitiesSubPageData = await getStrapiPage<
      CapablitiesSubPagesQuery,
      CapablitiesSubPagesQuery["capablitiesSubPages"][0]
    >({
      query: CAPABLITIES_SUB_PAGE_QUERY,
      variables: { filters: { slug: { eq: slug } } },
      extract: (res) => res?.capablitiesSubPages[0],
    });

  if (!response) notFound();
  return (<>
   {capablitiesSubPageData?.seo?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(capablitiesSubPageData.seo.structuredData),
          }}
        />
      )}
      {capablitiesSubPageData?.seo?.codeJson && (
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: capablitiesSubPageData.seo.codeJson,
          }}
        />
      )}
    <ServiceContainer service={capablitiesSubPageData!} />
  </>
  )
};

export default CapablitiesSubPage;
