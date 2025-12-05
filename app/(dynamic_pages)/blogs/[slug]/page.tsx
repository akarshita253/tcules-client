export const dynamic = "force-dynamic";

import BlogContainer from "@/features/blog/BlogContainer";
import { BlogsQuery } from "@/lib/codegen/graphql";
import { GET_BLOG } from "@/lib/queries/getBlogs";
import { strapiRequest } from "@/lib/utils";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const SingleBlog = async ({ params }: PageProps) => {
  const { slug } = await params;
  const data = await strapiRequest<BlogsQuery>(GET_BLOG, { slug });
  const blog = data.blogs?.[0];
  return <BlogContainer blog={blog!} />;
};

export default SingleBlog;