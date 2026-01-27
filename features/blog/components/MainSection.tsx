import { BlogsQuery } from "@/lib/codegen/graphql";
import TdlrSection from "./TdlrSection";
import Image from "next/image";
import Separator from "../../../components/shared/Sepration";
import VideoBlock from "../../../components/shared/VideoBlock";
import CodeBlock from "../../../components/shared/CodeBlock";
import DisplayContent from "@/components/shared/DisplayContent";

type MainSectionBlock = NonNullable<
  NonNullable<BlogsQuery["blogs"][0]>["mainSection"]
>[number];

export const renderBlock = (block: MainSectionBlock, index: number) => {
  if (!block || block.__typename === "Error") return null;
  switch (block.__typename) {
    case "ComponentBlogAndCasestudiesBlogOrCasestudyText":
      return (
        <DisplayContent key={block.id} content={block.blogContent ?? ""} />
      );
    case "ComponentBlogAndCasestudiesTldrSection":
      return (
        <TdlrSection key={block.id} tdlrContent={block.tdlrDescription ?? ""} />
      );
    case "ComponentBlogAndCasestudiesSectionImage":
      return (
        <div key={block.imageSection[0]?.url} className="my-8">
          <div
                      className={`relative w-full h-[390px] mb-8`}
                    >
                      <Image
                        src={block.imageSection[0]?.url??""}
                        alt={block.imageSection[0]?.alternativeText || "Feature image"}
                        fill={true}
                        className={`object-cover`}
                        loading="lazy"
                        unoptimized
                      />
                    </div>
          <p className="text-label-sm text-center pb-6">
            Caption text for the image
          </p>
        </div>
      );
    case "ComponentBlogAndCasestudiesSepration":
      return <Separator key={block.title} />
    case "ComponentBlogAndCasestudiesVideo":
      return (
        <VideoBlock
          key={block.id}
          id={block.id}
          title={block.title}
          description={block.description}
          autoplay={block.autoplay}
          loop={block.loop}
          thumbnail={block.thumbnail}
        />
      );

    case "ComponentBlogAndCasestudiesCodeSection":
      return <CodeBlock key={index} codeSnippet={block.codeSnippet ?? ""} />
    default:
      console.warn("Unknown block type:");
      return null;
  }
};
