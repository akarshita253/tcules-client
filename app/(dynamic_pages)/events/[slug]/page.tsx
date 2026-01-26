import SingleEventContainer from "@/features/event_interviews_podcasts/single_event/SingleEventContainer";
import { EventsQuery } from "@/lib/codegen/graphql";
import { generateSeoMetadata } from "@/lib/data/generateSeoMetaData";
import { getStrapiPage } from "@/lib/data/getStrapiPage";
import { GET_SINGLE_EVENT_QUERY } from "@/lib/queries/getEvents";
import { Metadata } from "next";

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
        EventsQuery,
        EventsQuery["events"][number]
      >({
        query: GET_SINGLE_EVENT_QUERY,
        variables: { slug: { eq: slug } },
        extract: (res) => res.events[0] ?? null,
      });

      return pageData?.seo;
    },
  });
}

const SingleEvent = async ({ params }: PageProps) => {
  const { slug } = await params;

    const eventsData = await getStrapiPage<
      EventsQuery,
      EventsQuery["events"][0]
    >({
      query: GET_SINGLE_EVENT_QUERY,
      variables: { slug: { eq: slug } },
      extract: (res) => res?.events[0],
    });

  return (
    <>
      {eventsData?.seo?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(eventsData?.seo.structuredData),
          }}
        />
      )}
      {eventsData?.seo?.codeJson && (
        <script dangerouslySetInnerHTML={{ __html: eventsData?.seo.codeJson }} />
      )}
      {eventsData && <SingleEventContainer singleEventData={eventsData} />}
    </>
  );
};

export default SingleEvent;
