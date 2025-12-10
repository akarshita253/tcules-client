import { BlogsQuery } from "@/lib/codegen/graphql";
import CtaSection from "./components/CtaSection";
import ExploreResources from "./components/ExploreResources";
import FeatureImage from "./components/FeatureImage";
import GetStarted from "./components/GetStarted";
import HeadingAndTime from "./components/HeadingAndTime";
import Profiles from "./components/Profiles";
import { renderBlock } from "./components/MainSection";
import { Container } from "@/components/global/Container";
import { Block } from "@/components/global/Block";

const BlogContainer = ({
  blog,
}: {
  blog: NonNullable<BlogsQuery["blogs"][0]>;
}) => {
  const { title, createdAt, updatedAt, featureImage } = blog;
  const profiles = blog.blogProfileSection;

  return (
    <>
      <Container className="grid grid-cols-12 gap-6 ">
        <Block className="lg:col-start-2 lg:col-end-12 col-start-1 col-end-13">
          <HeadingAndTime
            title={title}
            createdAt={createdAt}
            updatedAt={updatedAt}
          />
          <FeatureImage featureImage={featureImage} />
        </Block>
      </Container>
      <Container className="pt-8 pb-24 md:grid grid-cols-12 gap-6">
        <Profiles profiles={profiles} />
        <div className="md:col-start-3 lg:col-start-4 lg:col-end-10 md:col-end-11">
          {(blog.mainSection ?? []).map((block, index) =>
            renderBlock(block, index)
          )}
        </div>
        <GetStarted />
      </Container>
      <Container>
        <Block className="col-span-12">
          <ExploreResources />
          <CtaSection />
        </Block>
      </Container>
    </>
  );
};

export default BlogContainer;
