import SingleInterviewContainer from "@/features/event_interviews_podcasts/single_interview/SingleInterviewContainer";
import { InterviewsQuery } from "@/lib/codegen/graphql";
import { generateSeoMetadata } from "@/lib/data/generateSeoMetaData";
import { getStrapiPage } from "@/lib/data/getStrapiPage";
import { GET_SINGLE_INTERVIEW } from "@/lib/queries/getInterviews";
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
        InterviewsQuery,
        InterviewsQuery["interviews"][number]
      >({
        query: GET_SINGLE_INTERVIEW,
        variables: { slug: { eq: slug } },
        extract: (res) => res.interviews[0] ?? null,
      });

      return pageData?.seo;
    },
  });
}


const SingleInterview = async ({ params }: PageProps) => {
   const { slug } = await params;

       const interviewData = await getStrapiPage<
         InterviewsQuery,
         InterviewsQuery["interviews"][0]
       >({
         query: GET_SINGLE_INTERVIEW,
         variables: { slug: { eq: slug } },
         extract: (res) => res?.interviews[0],
       });

  return <>
       {interviewData?.seo?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(interviewData?.seo.structuredData),
          }}
        />
      )}
      {interviewData?.seo?.codeJson && (
        <script dangerouslySetInnerHTML={{ __html: interviewData?.seo.codeJson }} />
      )}
  {interviewData && <SingleInterviewContainer singleInterviewData={interviewData} />}
  </>
}

export default SingleInterview
