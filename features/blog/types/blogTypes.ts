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

export interface BlogDescriptionProps {
  content: string;
}