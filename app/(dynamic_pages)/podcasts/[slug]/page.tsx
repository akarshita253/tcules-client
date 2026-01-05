import PodcastContainer from "@/features/podcast/PodcastContainer";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}
const SinglePodcast = async ({ params }: PageProps) => {
  const { slug } = await params;
  return <PodcastContainer />;
};

export default SinglePodcast;
