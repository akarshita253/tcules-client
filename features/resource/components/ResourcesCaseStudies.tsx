"use client";

import { Loader } from "@/components/shared/Loader";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AllBlogsQuery,
  GetSingleEventQuery,
  GetSingleInterviewQuery,
  GetSinglePodcastQuery,
} from "@/lib/codegen/graphql";
import { GET_BLOGS } from "@/lib/queries/getBlogs";
import { GET_EVENT_THUMBNAIL } from "@/lib/queries/getEvents";
import { GET_INTERVIEW_THUMBNAIL } from "@/lib/queries/getInterviews";
import { GET_PODCAST_THUMBNAIL } from "@/lib/queries/getPodcasts";
import { formatDate, timeAgo } from "@/lib/utils";
import { useQuery } from "@apollo/client/react";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

type ResourceQueryMap = {
  articles: AllBlogsQuery;
  interviews: GetSingleInterviewQuery;
  podcasts: GetSinglePodcastQuery;
  events: GetSingleEventQuery;
};

type ResourceQueryDocumentMap = {
  articles: typeof GET_BLOGS;
  interviews: typeof GET_INTERVIEW_THUMBNAIL;
  podcasts: typeof GET_PODCAST_THUMBNAIL;
  events: typeof GET_EVENT_THUMBNAIL;
};

interface BaseResourceItem {
  id?: string;
  documentId?: string;
  slug?: string | null;
  title?: string | null;
  name?: string | null;
  createdAt?: string;
  updatedAt?: string;
  thumbnail?: {
    url: string;
    width?: number | null;
    height?: number | null;
    alternativeText?: string | null;
  } | null;
}

type ResourceKey = keyof typeof mapObject;

export const mapObject: {
  [K in keyof ResourceQueryMap]: {
    query: ResourceQueryDocumentMap[K];
    schema: ResourceQueryMap[K];
  };
} = {
  articles: { query: GET_BLOGS, schema: {} as AllBlogsQuery },
  interviews: { query: GET_INTERVIEW_THUMBNAIL, schema: {} as GetSingleInterviewQuery },
  podcasts: { query: GET_PODCAST_THUMBNAIL, schema: {} as GetSinglePodcastQuery },
  events: { query: GET_EVENT_THUMBNAIL, schema: {} as GetSingleEventQuery },
};

type ResourcesCaseStudiesProps = {
  activeFilters: string[];
  activeResource: ResourceKey;
};

const ResourcesCaseStudies = ({
  activeFilters,
  activeResource,
}: ResourcesCaseStudiesProps) => {
  const caseStudyFilters = useMemo(() => {
    if (activeFilters.length === 0) return undefined;

    return {
      tags: {
        name: {
          in: activeFilters,
        },
      },
    };
  }, [activeFilters]);

  const { query } = mapObject[activeResource];
  const { data, loading, error } = useQuery<
    ResourceQueryMap[typeof activeResource]
  >(query, {
    variables: {
      filters: caseStudyFilters,
    },
  });

  const itemsArray = data ? Object.values(data)[0] : [];

  if (loading)
    return (
      <div className="flex items-center justify-center">
        <Loader />
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-12 gap-x-4 md:gap-x-6">
      {itemsArray &&
        itemsArray.map((singleItem: BaseResourceItem) => {
          return (
            <Card
              className="relative w-full overflow-hidden gap-0 pb-0"
              key={singleItem?.documentId}
            >
              <Link href={`/${activeResource}/${singleItem?.slug}`}>
                {singleItem?.thumbnail?.url && (
                  <CardHeader className="h-[344px] relative rounded-xl overflow-hidden mb-4">
                    <Image
                      src={singleItem?.thumbnail?.url}
                      alt="Service"
                      fill
                      className="object-cover"
                      loading="eager"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <small className="bg-neutral-50 capitalize rounded-full text-neutral-800 absolute top-4 left-4 text-caption-lg py-1.5 px-3.5">
                      {activeResource}
                    </small>
                  </CardHeader>
                )}
                <CardContent className="mb-6">
                  <CardTitle>
                    <h3 className="text-heading-2xs">{singleItem?.title}</h3>
                  </CardTitle>
                </CardContent>
                <CardFooter className="flex text-neutral-600 items-center">
                  <span className="text-label-md">
                    {formatDate(singleItem?.createdAt)}
                  </span>
                  <span>
                    <Dot />
                  </span>
                  {singleItem?.updatedAt && timeAgo(singleItem.updatedAt)}
                </CardFooter>
              </Link>
            </Card>
          );
        })}
    </div>
  );
};

export default ResourcesCaseStudies;
