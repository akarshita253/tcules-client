import { BlogsQuery } from "@/lib/codegen/graphql";

type Blog = NonNullable<BlogsQuery["blogs"][0]>;

export interface HeadingAndTimeProps {
  title: Blog["title"];
  createdAt: Blog["createdAt"];
  updatedAt: Blog["updatedAt"];
}

export interface FeatureImageProps {
  featureImage: Blog["featureImage"];
}

export interface ProfilesProps {
  profiles: Blog["blogProfileSection"];
}

export interface DisplayContentProps {
  content: string;
}

export type AllBlogs = {
  __typename: "Blog";
  title: string | null;
  slug: string | null;
  publishedAt: string | null;
  createdAt: string | null;
  featureImage: {
    alternativeText: string;
    url: string;
    height: string;
    width: string;
  };
};

export type AllBlogsQuery = {
  __typename?: "Query";
  blogs: Array<AllBlogs>;
};
