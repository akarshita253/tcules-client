import SingleInterviewContainer from "@/features/event_interviews_podcasts/single_interview/SingleInterviewContainer";
import { InterviewsQuery } from "@/lib/codegen/graphql";
import { GET_SINGLE_INTERVIEW } from "@/lib/queries/getInterviews";
import { strapiRequest } from "@/lib/utils";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const SingleInterview = async ({ params }: PageProps) => {
   const { slug } = await params;
    const response = await strapiRequest<InterviewsQuery>(GET_SINGLE_INTERVIEW, {
      slug,
    });
    const data = response.interviews[0];
  return <>
  {data && <SingleInterviewContainer singleInterviewData={data} />}
  </>
}

export default SingleInterview
