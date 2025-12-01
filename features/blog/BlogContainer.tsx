import { BlogsQuery } from "@/lib/codegen/graphql";
import CtaSection from "./components/CtaSection";
import ExploreResources from "./components/ExploreResources";
import FeatureImage from "./components/FeatureImage";
import GetStarted from "./components/GetStarted";
import HeadingAndTime from "./components/HeadingAndTime";
import Profiles from "./components/Profiles";
import { renderBlock } from "./components/MainSection";

const BlogContainer = ({
  blog,
}: {
  blog: NonNullable<BlogsQuery["blogs"][0]>;
}) => {
  const { title, createdAt, updatedAt, featureImage } = blog;
  const profiles = blog.blogProfileSection;

  return (
    <div className="max-w-[1344px] px-12 mx-auto">
      <div className="max-w-[1116px] mx-auto">
        <HeadingAndTime
          title={title}
          createdAt={createdAt}
          updatedAt={updatedAt}
        />
        <FeatureImage featureImage={featureImage} />
        <div className="pt-8 pb-24 grid grid-cols-12 gap-6">
          <Profiles profiles={profiles} />
          <div className="col-span-6">
            {(blog.mainSection ?? []).map((block) => renderBlock(block))}
          </div>
          <GetStarted />
        </div>
      </div>

      <ExploreResources />
      <CtaSection />
    </div>
  );
};

export default BlogContainer;
