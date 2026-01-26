import SinglePodcastContainer from "@/features/event_interviews_podcasts/single_podcast/SinglePodcastContainer";
import { PodcastsQuery } from "@/lib/codegen/graphql";
import { generateSeoMetadata } from "@/lib/data/generateSeoMetaData";
import { getStrapiPage } from "@/lib/data/getStrapiPage";
import { GET_SINGLE_PODCAST } from "@/lib/queries/getPodcasts";
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
        PodcastsQuery,
        PodcastsQuery["podcasts"][number]
      >({
        query: GET_SINGLE_PODCAST,
        variables: { slug: { eq: slug } },
        extract: (res) => res.podcasts[0] ?? null,
      });

      return pageData?.seo;
    },
  });
}


const SinglePodcast = async ({ params }: PageProps) => {
  const { slug } = await params;


      const podcastData = await getStrapiPage<
        PodcastsQuery,
        PodcastsQuery["podcasts"][0]
      >({
        query: GET_SINGLE_PODCAST,
        variables: { slug: { eq: slug } },
        extract: (res) => res?.podcasts[0],
      });
  
  return <>
     {podcastData?.seo?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(podcastData?.seo.structuredData),
          }}
        />
      )}
      {podcastData?.seo?.codeJson && (
        <script dangerouslySetInnerHTML={{ __html: podcastData?.seo.codeJson }} />
      )}
  {podcastData && <SinglePodcastContainer singlePodcastData={podcastData} />}
  </>;
};

export default SinglePodcast;
