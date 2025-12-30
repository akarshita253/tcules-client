"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Section from "@/components/global/Section";
import { useMemo, useState } from "react";
import { CgClose } from "react-icons/cg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useQuery } from "@apollo/client/react";
import {
  GET_ALL_CASE_STUDIES,
  GET_CASESTUDY_CATEGORIES,
} from "@/lib/queries/getCaseStudies";
import { AllCaseStudiesQuery, CategoriesQuery } from "@/lib/codegen/graphql";
import Link from "next/link";
import { Loader } from "@/components/shared/Loader";

const CaseStudyList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [dropdownState, setDropdownState] = useState(false);
  const activeFilters = searchParams.getAll("filter");
  const { loading, error, data } = useQuery<CategoriesQuery>(
    GET_CASESTUDY_CATEGORIES
  );

  const caseStudyFilters = useMemo(() => {
    if (activeFilters.length === 0) return undefined;

    return {
      categories: {
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
    <Section className="border-b">
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
            <div className="absolute z-10 w-64 rounded-lg bg-neutral-50 border border-neutral-200">
              <ul>
                {loading && <li>Loading...</li>}
                {error && <li>Error: {error.message}</li>}
                {data?.categories &&
                  data.categories.map((category, index) => (
                    <li
                      key={index}
                      className="py-2 px-4 hover:bg-neutral-100 cursor-pointer"
                      onClick={() => handleFilterChange(category?.name ?? "")}
                    >
                      {category?.name}
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
      <div className="flex flex-col gap-6 sm:gap-12">
        {caseStudiesListData !== undefined &&
          caseStudiesListData.caseStudies.length > 0 &&
          caseStudiesListData.caseStudies.map((singleCaseStudy) => {
            return (
              <Link
                href={`case-studies/${singleCaseStudy?.slug}`}
                key={singleCaseStudy?.slug}
              >
                <div
                  id="case-study-listing-cards"
                  className=" p-4 sm:p-6 grid grid-cols-12 gap-6 hover:bg-neutral-100 group rounded-xl transition-colors duration-200"
                >
                  <div className="col-span-2">
                    <div className="relative rounded-xl overflow-hidden w-full h-[168px]">
                      <Image
                        src={singleCaseStudy?.thumbnail?.url || ""}
                        fill
                        alt={
                          singleCaseStudy?.thumbnail?.alternativeText ||
                          "Case study"
                        }
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div
                    id="details"
                    className="col-span-7 flex flex-col justify-between gap-2 p-3"
                  >
                    <div>
                      <h3 className="text-neutral-800 text-heading-xs mb-4">
                        {singleCaseStudy?.title}
                      </h3>
                      <p className="text-neutral-600 text-label-md">
                        {singleCaseStudy?.description}
                      </p>
                    </div>
                    <div>
                      {singleCaseStudy?.categories !== undefined &&
                        singleCaseStudy?.categories.length > 0 &&
                        singleCaseStudy.categories.map((category) => {
                          return (
                            <span
                              className="text-caption-lg text-neutral-500"
                              key={category?.documentId}
                            >
                              {category?.name}
                            </span>
                          );
                        })}
                    </div>
                  </div>
                  <div id="tags" className="col-span-3 flex flex-col gap-2">
                    {singleCaseStudy?.tags !== undefined &&
                      singleCaseStudy?.tags.length > 0 &&
                      singleCaseStudy?.tags.map((tag) => {
                        return (
                          <p
                            key={tag?.documentId}
                            className="transition-colors duration-200 group-hover:bg-neutral-50 flex w-fit px-2 py-1 items-center justify-center gap-2 uppercase bg-neutral-100 text-neutral-800 rounded-full "
                          >
                            <span className="text-neutral-700 text-caption-lg">
                              {tag?.name}
                            </span>
                          </p>
                        );
                      })}
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </Section>
  );
};

export default CaseStudyList;
