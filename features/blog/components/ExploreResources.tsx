"use client";

import Section from "@/components/global/Section";
import { AllBlogsQuery } from "@/lib/codegen/graphql";
import { GET_BLOGS } from "@/lib/queries/getBlogs";
import { formatDate } from "@/lib/utils";
import { useQuery } from "@apollo/client/react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ExploreResources = () => {
  const {
    data: blogsListData,
    loading: blogsLoading,
    error: blogsError,
  } = useQuery<AllBlogsQuery>(GET_BLOGS, {});

  console.log("ExploreResources blogsListData:", blogsListData);
  if (blogsLoading) return <p>Loading...</p>;
  if (blogsError) return <p>Error loading blogs.</p>;

  return (
    <Section>
      <div className="flex flex-col md:flex-row justify-between items-baseline sm:mb-16 mb-9">
        <h2 className="">
          <span className=" text-display-xs text-accent-500">Explore </span>
          <span className="text-heading-sm">other resources</span>
        </h2>
        <Link
          href="#"
          className="flex items-center gap-2 text-neutral-700 uppercase text-caption-lg mt-4 md:mt-0"
        >
          View all <ChevronRight className="text-neutral-700 text-xs" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogsListData?.blogs?.map((blog, index) => {
          return (
            <Link key={index} className="flex flex-col justify-between gap-3" href={blog?.slug||"#"}>
              <div className="w-full h-[285px] relative overflow-hidden rounded-lg">
                {blog?.thumbnail?.url && (
                  <Image
                    src={blog?.thumbnail?.url || ""}
                    alt={blog?.thumbnail?.alternativeText || "image"}
                    fill
                  />
                )}
              </div>
                <div className="">
                  <h3 className="mb-3 text-heading-2xs text-neutral-800">
                    {blog?.title}
                  </h3>
                  <p className="text-label-md text-neutral-600">
                    {formatDate(blog?.createdAt)}
                  </p>
                </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
};

export default ExploreResources;
