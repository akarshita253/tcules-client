import ServiceContainer from "@/features/services/ServiceContainer";
import { CapablitiesSubPagesQuery } from "@/lib/codegen/graphql";
import { CAPABLITIES_SUB_PAGE_QUERY } from "@/lib/queries/getCapablitiesSubPages";
import { strapiRequest } from "@/lib/utils";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
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
  if (!response) notFound();
  const capablitiesSubPageData = response.capablitiesSubPages.at(0);
  return (
    <ServiceContainer service={capablitiesSubPageData!} />
  )
};

export default CapablitiesSubPage;
