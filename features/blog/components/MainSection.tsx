import { BlogsQuery } from "@/lib/codegen/graphql";
import BlogDescription from "./BlogDescription";
import TdlrSection from "./TdlrSection";
import Image from "next/image";
import Separator from "./Sepration";
import VideoBlock from "./VideoBlock";
import CodeBlock from "./CodeBlock";

type MainSectionBlock = NonNullable<
  NonNullable<BlogsQuery["blogs"][0]>["mainSection"]
>[number];

export const renderBlock = (block: MainSectionBlock) => {
  if (!block || block.__typename === "Error") return null;
  switch (block.__typename) {
    case "ComponentBlogAndCasestudiesBlogOrCasestudyText":
      return (
        <BlogDescription key={block.id} content={block.blogContent ?? ""} />
      );
    case "ComponentBlogAndCasestudiesTldrSection":
      return (
        <TdlrSection key={block.id} tdlrContent={block.tdlrDescription ?? ""} />
      )
     case "ComponentBlogAndCasestudiesSectionImage": 
     return (
      <div key={block.imageSection[0]?.url} className="my-8">
        <Image
          src={`${process.env.STRAPI_URL}${block.imageSection[0]?.url ?? ""}`}
          alt={block.imageSection[0]?.alternativeText ?? "Blog Image"}
          width={block.imageSection[0]?.width ?? 600}
          height={block.imageSection[0]?.height ?? 400}
          unoptimized
          className="w-full h-auto rounded"
        />
      </div>
     )
     case "ComponentBlogAndCasestudiesSepration":
      return (
        <Separator key={block.title}/>
      )
         case "ComponentBlogAndCasestudiesVideo":
      return (
        <VideoBlock key={block.id}
      id={block.id}
      title={block.title}
      description={block.description}
      autoplay={block.autoplay}
      loop={block.loop}
      thumbnail={block.thumbnail}/>
      )

      case "ComponentBlogAndCasestudiesCodeSection":
        return (
          <CodeBlock key={block.id} codeSnippet={block.codeSnippet ?? ""} />
        )
    default:
      console.warn("Unknown block type:");
      return null;
  }
};
