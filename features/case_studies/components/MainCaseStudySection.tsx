import BlogDescription from "@/features/blog/components/BlogDescription";
import CodeBlock from "@/features/blog/components/CodeBlock";
import VideoBlock from "@/features/blog/components/VideoBlock";
import { CaseStudiesQuery } from "@/lib/codegen/graphql";
import Separator from "@/features/blog/components/Sepration";
import { MultiImageLayout } from "@/components/global/MultiImageBlock";

type MainSectionBlock = NonNullable<
  NonNullable<CaseStudiesQuery["caseStudies"][0]>["caseStudyContents"]
>[number];

export const renderBlock = (block: MainSectionBlock) => {
  if (!block || block.__typename === "Error") return null;
  switch (block.__typename) {
    case "ComponentBlogAndCasestudiesBlogOrCasestudyText":
      return (
        <BlogDescription key={block.id} content={block.blogContent ?? ""} />
      );
    case "ComponentBlogAndCasestudiesSectionImage":
      return (
        <div key={block.id} className="my-10">
          <MultiImageLayout
            images={(block.imageSection ?? []).filter(
              (img): img is NonNullable<typeof img> => !!img
            )}
            layout={(block.layout ?? "default") as "default" | "twoLeftFocus" | "twoRightFocus" | "bento"}
          />
        </div>
      );
    case "ComponentBlogAndCasestudiesSepration":
      return <Separator key={block.title} />;
    case "ComponentBlogAndCasestudiesVideo":
      return (
        <VideoBlock
          key={block.id}
          id={block.id}
          title={block.title ?? ""}
          description={block.description ?? ""}
          autoplay={block.autoplay ?? false}
          loop={block.loop ?? false}
          thumbnail={block.thumbnail}
        />
      );
    case "ComponentBlogAndCasestudiesCodeSection":
      return <CodeBlock key={block.id} codeSnippet={block.codeSnippet ?? ""} />;
    default:
      console.warn("Unknown block type:", block.__typename);
      return null;
  }
};
