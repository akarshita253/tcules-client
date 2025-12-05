import { Cards } from "@/components/shared/Cards";
import { AllBlogsQuery } from "@/features/blog/types/blogTypes";
import { GET_BLOGS } from "@/lib/queries/getBlogs";
import { strapiRequest } from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";

const BlogList = async () => {
  const data = await strapiRequest<AllBlogsQuery>(GET_BLOGS);
  if (!data) {
    notFound();
  }
  const allBlogs = data?.blogs;
  return (
    <main>
      {allBlogs?.map((blog) => {
        const imageUrl = {
          url: blog.featureImage?.url,
          alternativeText: blog.featureImage?.alternativeText,
        };
        return (
          <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
            <Cards
              title={blog.title || ""}
              createdAt={blog.createdAt}
              description={""}
              imageUrl={imageUrl}
            />
          </Link>
        );
      })}
    </main>
  );
};

export default BlogList;
