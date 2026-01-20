"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useQuery } from "@apollo/client/react";
import {
  GET_ALL_CASE_STUDIES,
  GET_CASESTUDY_TAGS,
} from "@/lib/queries/getCaseStudies";
import { AllCaseStudiesQuery, TagsQuery } from "@/lib/codegen/graphql";
import Link from "next/link";
import { Loader } from "@/components/shared/Loader";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate, timeAgo } from "@/lib/utils";
import { Dot } from "lucide-react";

const CaseStudyList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [dropdownState, setDropdownState] = useState(false);
  const activeFilters = searchParams.getAll("filter");
  const { loading, error, data } = useQuery<TagsQuery>(GET_CASESTUDY_TAGS);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownState(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const handleFilterChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "all") {
      params.delete("filter");
    } else {
      const currentFilters = params.getAll("filter");

      if (!currentFilters.includes(value)) {
        params.append("filter", value);
      }
    }

    router.push(`?${params.toString()}`, { scroll: false });
    setDropdownState(false);
  };

  const handleDeleteFilter = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("filter");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleActiveFilter = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("filter");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  if (caseStudyLoading)
    return (
      <div className="flex items-center justify-center">
        <Loader />
      </div>
    );
  if (caseStudiesError) return <p>Error: {caseStudiesError.message}</p>;

  return (
    <div>
      <div className="flex items-center gap-4">
        <div>
          <Button
            variant={"link"}
            className="text-neutral-800 text-label-sm px-0 no-underline"
            onClick={() => setDropdownState((prev) => !prev)}
          >
            Filter by product stages
            <span className="border px-2 text-label-sm py-1 rounded-full ml-2">
              {"0 -> 1"}
            </span>
          </Button>
          {dropdownState && (
            <div ref={dropdownRef} className="absolute z-10 w-64 rounded-lg bg-neutral-50 border border-neutral-200">
              <ul>
                {loading && <li>Loading...</li>}
                {error && <li>Error: {error.message}</li>}
                {data?.tags &&
                  data?.tags.map((tag, index) => (
                    <li
                      key={index}
                      className="py-2 px-4 hover:bg-neutral-100 cursor-pointer"
                      onClick={() => handleFilterChange(tag?.name ?? "")}
                    >
                      {tag?.name}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          {activeFilters !== undefined &&
            activeFilters.length > 0 &&
            activeFilters.map((filterItem) => {
              return (
                <span
                  key={filterItem}
                  className="flex items-center justify-center gap-2 bg-neutral-50 border border-neutral-200  text-neutral-800 text-caption-md rounded-full py-1.5 px-3.5 mr-2"
                >
                  <span className="text-neutral-700 capitalize">
                    {filterItem}
                  </span>
                  <span>
                    <CgClose
                      className="text-neutral-400 cursor-pointer"
                      onClick={handleActiveFilter}
                    />
                  </span>
                </span>
              );
            })}
          {activeFilters.length > 0 && activeFilters !== undefined && (
            <span
              className="text-neutral-700 capitalize cursor-pointer"
              onClick={handleDeleteFilter}
            >
              Clear all
            </span>
          )}
        </div>
      </div>
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
                    <span>
                      <Dot />
                    </span>
                    {timeAgo(singleCaseStudy?.updatedAt)}
                  </CardFooter>
                </Link>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default CaseStudyList;
