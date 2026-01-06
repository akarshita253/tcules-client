import SingleEventContainer from "@/features/event_interviews_podcasts/single_event/SingleEventContainer";
import { EventsQuery } from "@/lib/codegen/graphql";
import { GET_SINGLE_EVENT_QUERY } from "@/lib/queries/getEvents";
import { strapiRequest } from "@/lib/utils";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const SingleEvent = async ({ params }: PageProps) => {
  const { slug } = await params;
  const response = await strapiRequest<EventsQuery>(GET_SINGLE_EVENT_QUERY, {
    slug,
  });
  const data = response.events[0];
  return <>
  {data && <SingleEventContainer singleEventData={data} />}
  </>
};

export default SingleEvent;
