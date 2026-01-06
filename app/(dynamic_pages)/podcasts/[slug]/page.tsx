import SinglePodcastContainer from "@/features/event_interviews_podcasts/single_podcast/SinglePodcastContainer";
import { PodcastsQuery } from "@/lib/codegen/graphql";
import { GET_SINGLE_PODCAST } from "@/lib/queries/getPodcasts";
import { strapiRequest } from "@/lib/utils";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const SinglePodcast = async ({ params }: PageProps) => {
  const { slug } = await params;
  const response = await strapiRequest<PodcastsQuery>(GET_SINGLE_PODCAST, {
    slug,
  });
  const data = response.podcasts[0];
  return <>{data && <SinglePodcastContainer singlePodcastData={data} />}</>;
};

export default SinglePodcast;
