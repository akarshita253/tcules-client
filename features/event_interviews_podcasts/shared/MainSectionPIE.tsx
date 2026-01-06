import DisplayContent from "@/components/shared/DisplayContent";
import { MultiImageLayout } from "@/components/shared/MultiImageBlock";
import Separator from "@/components/shared/Sepration";
import VideoBlock from "@/components/shared/VideoBlock";
import TdlrSection from "@/features/blog/components/TdlrSection";
import { EventsQuery } from "@/lib/codegen/graphql";
import SharedCardBtwPIE from "./SharedCardBtwPIE";

type MainSectionPIEProps = NonNullable<
  NonNullable<EventsQuery["events"][0]>["mainSection"]
>[number];

const RenderMainSectionPIE = (block: MainSectionPIEProps, index: number) => {
  if (!block || block.__typename === "Error") return null;
  switch (block.__typename) {
    case "ComponentBlogAndCasestudiesBlogOrCasestudyText":
      return (
        <DisplayContent key={block.id} content={block.blogContent ?? ""} />
      );
    case "ComponentPodcasteEventsInterviewsShadowCard":
      return <SharedCardBtwPIE cardData={block} key={block.id}/>;
    case "ComponentBlogAndCasestudiesSectionImage":
      return (
        <div key={index} className="my-10">
          <MultiImageLayout
            images={(block.imageSection ?? []).filter(
              (img): img is NonNullable<typeof img> => !!img
            )}
            layout={
              (block.layout ?? "default") as
                | "default"
                | "twoLeftFocus"
                | "twoRightFocus"
                | "bento"
            }
          />
        </div>
      );
    case "ComponentBlogAndCasestudiesTldrSection":
      return (
        <TdlrSection key={block.id} tdlrContent={block.tdlrDescription ?? ""} />
      );
    case "ComponentBlogAndCasestudiesSepration":
      return <Separator key={index} />;
    case "ComponentBlogAndCasestudiesVideo":
      return (
        <VideoBlock
          key={block.id}
          id={block.id}
          title={block.title ?? ""}
          description={""}
          autoplay={block.autoplay ?? false}
          loop={block.loop ?? false}
          thumbnail={block.thumbnail}
        />
      );
    default:
      console.warn("Unknown block type:", block.__typename);
      return null;
  }
};

export default RenderMainSectionPIE;
