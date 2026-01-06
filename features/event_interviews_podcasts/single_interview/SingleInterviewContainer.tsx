import { Block } from "@/components/global/Block";
import Breadcrumbs from "@/components/global/Breadcrumbs";
import { Container } from "@/components/global/Container";
import Section from "@/components/global/Section";
import { InterviewsQuery } from "@/lib/codegen/graphql";
import Image from "next/image";
import RenderMainSectionPIE from "../shared/MainSectionPIE";
import BottomSectionPIE from "../shared/BottomSectionPIE";
import ExploreResources from "@/features/blog/components/ExploreResources";
import { formatDate } from "@/lib/utils";

const SingleInterviewContainer = ({
  singleInterviewData,
}: {
  singleInterviewData: NonNullable<InterviewsQuery["interviews"]>[0];
}) => {
  if (!singleInterviewData) return null;
  const { title, featureImage, tags, description } = singleInterviewData;
  return (
    <>
      <Container className="grid grid-cols-12 gap-6 ">
        <Block className="lg:col-start-2 lg:col-end-12 col-start-1 col-end-13">
          <Section>
            <div className="mb-6 sm:mb-12">
              <Breadcrumbs />
              <div>
                {tags && tags.length > 0 && (
                  <div className="flex items-center gap-2 mb-6">
                    {tags.map((tag) => (
                      <span
                        key={tag?.name}
                        className="text-label-2xs text-neutral-700 py-1 px-2 rounded-full border border-neutral-300"
                      >
                        {tag?.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <h1 className="text-heading-sm text-neutral-800 mb-6">{title}</h1>
              <p className="mb-6 text-label-md text-neutral-700">
                {description}
              </p>
              <div className="flex gap-2 items-center text-label-xs text-neutral-600">
                <span>{formatDate(singleInterviewData?.createdAt)}</span>
                <span>.</span>
              </div>
              <p className="text-neutral-500 text-label-3xs">
                <small>Last updated on {formatDate(singleInterviewData.updatedAt)}</small>
              </p>
            </div>
            {featureImage?.url && (
              <div className="w-full relative rounded-xl overflow-hidden">
                <Image
                  src={featureImage?.url}
                  alt={featureImage?.alternativeText || "feature image"}
                  width={featureImage?.width || 1096}
                  height={featureImage?.height || 600}
                  className="object-cover"
                />
              </div>
            )}
          </Section>
        </Block>
      </Container>
      <Container className="pt-8 pb-24 md:grid grid-cols-12 gap-6">
        <div className="md:col-start-3 lg:col-start-4 lg:col-end-10 md:col-end-11">
          {(singleInterviewData.mainSection ?? []).map((block, index) =>
            RenderMainSectionPIE(block, index)
          )}
        </div>
      </Container>
      <Container>
        <Block className="col-span-12">
          <ExploreResources />
          <BottomSectionPIE />
        </Block>
      </Container>
    </>
  );
};

export default SingleInterviewContainer;
