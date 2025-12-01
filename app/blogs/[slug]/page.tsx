import { getBlogBySlug } from "@/features/blog/actions/blogActions";
import BlogContainer from "@/features/blog/BlogContainer";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const SingleBlog = async ({ params }: PageProps) => {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  
  return (
      <BlogContainer blog={blog}/>
  );
};

export default SingleBlog;