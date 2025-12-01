import { strapiClient } from "@/lib/apolloClient";
import { GET_BLOG_BY_SLUG } from "@/lib/queries/getBlogs";

export async function getBlogBySlug(slug: string) {
  const query = GET_BLOG_BY_SLUG;

  const variables = { slug };
  const data = await strapiClient.request(query, variables);
  if (!data.blogs?.[0]) {
    throw new Error(`Blog with slug "${slug}" not found`);
  }

  return data.blogs[0];
}