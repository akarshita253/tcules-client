import BlogContainer from "@/features/blog/BlogContainer";
import { BlogsQuery } from "@/lib/codegen/graphql";
import { generateSeoMetadata } from "@/lib/data/generateSeoMetaData";
import { getStrapiPage } from "@/lib/data/getStrapiPage";
import { GET_BLOG } from "@/lib/queries/getBlogs";
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
        BlogsQuery,
        BlogsQuery["blogs"][number]
      >({
        query: GET_BLOG,
        variables: { filters: { slug: { eq: slug } } },
        extract: (res) => res.blogs[0] ?? null,
      });

      return pageData?.seo;
    },
  });
}
const SingleBlog = async ({ params }: PageProps) => {
  const { slug } = await params;

  const blogData = await getStrapiPage<BlogsQuery, BlogsQuery["blogs"][0]>({
    query: GET_BLOG,
    variables: { filters: { slug: { eq: slug } } },
    extract: (res) => res?.blogs[0],
  });

  if (!blogData) {
    notFound();
  }
  return (
    <>
      {blogData?.seo?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blogData?.seo.structuredData),
          }}
        />
      )}
      {blogData?.seo?.codeJson && (
        <script dangerouslySetInnerHTML={{ __html: blogData?.seo.codeJson }} />
      )}
      <BlogContainer blog={blogData!} />;
    </>
  );
};

export default SingleBlog;
