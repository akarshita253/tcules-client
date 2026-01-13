"use client";

import { Loader } from "@/components/shared/Loader";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AllCaseStudiesQuery } from "@/lib/codegen/graphql";
import { GET_ALL_CASE_STUDIES } from "@/lib/queries/getCaseStudies";
import { formatDate, timeAgo } from "@/lib/utils";
import { useQuery } from "@apollo/client/react";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

type ResourcesCaseStudiesProps = {
  activeFilters: string[];
};

const ResourcesCaseStudies = ({ activeFilters }: ResourcesCaseStudiesProps) => {
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

  const {
    data: caseStudiesListData,
    loading: caseStudyLoading,
    error: caseStudiesError,
  } = useQuery<AllCaseStudiesQuery>(GET_ALL_CASE_STUDIES, {
    variables: {
      filters: caseStudyFilters,
    },
  });

  if (caseStudyLoading)
    return (
      <div className="flex items-center justify-center">
        <Loader />
      </div>
    );
  if (caseStudiesError) return <p>Error: {caseStudiesError.message}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-12 gap-x-4 md:gap-x-6">
      {caseStudiesListData &&
        caseStudiesListData.caseStudies.map((singleCaseStudy) => {
          return (
            <Card
              className="relative w-full overflow-hidden gap-0 pb-0"
              key={singleCaseStudy?.documentId}
            >
              <Link href={`/case-studies/${singleCaseStudy?.slug}`}>
                {singleCaseStudy?.thumbnail?.url && (
                  <CardHeader className="h-[344px] relative rounded-xl overflow-hidden mb-4">
                    <Image
                      src={singleCaseStudy?.thumbnail?.url}
                      alt="Service"
                      fill
                      objectFit="cover"
                    />
                    <small className="bg-neutral-50 rounded-full text-neutral-800 absolute top-4 left-4 text-caption-lg py-1.5 px-3.5">
                      Blog
                    </small>
                  </CardHeader>
                )}
                <CardContent className="mb-6">
                  <CardTitle>
                    <h3 className="text-heading-2xs">
                      {singleCaseStudy?.title}
                    </h3>
                  </CardTitle>
                </CardContent>
                <CardFooter className="flex text-neutral-600 items-center">
                  <span className="text-label-md">
                    {formatDate(singleCaseStudy?.createdAt)}
                  </span>
                  <span><Dot/></span>
                  {timeAgo(singleCaseStudy?.updatedAt)}
                </CardFooter>
              </Link>
            </Card>
          );
        })}
    </div>
  );
};

export default ResourcesCaseStudies;
