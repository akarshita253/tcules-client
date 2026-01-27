"use client";

import ButtonTag from "@/components/shared/ButtonTag";
import { Loader } from "@/components/shared/Loader";
import { AllCaseStudiesQuery } from "@/lib/codegen/graphql";
import { GET_ALL_CASE_STUDIES } from "@/lib/queries/getCaseStudies";
import { useQuery } from "@apollo/client/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const LabsCaseStudies = () => {
  const {
    data: caseStudiesListData,
    loading: caseStudyLoading,
    error: caseStudiesError,
  } = useQuery<AllCaseStudiesQuery>(GET_ALL_CASE_STUDIES, {
    variables: {
      pagination: {
        limit: 5,
      },
    },
  });
  if (caseStudyLoading) {
    return <Loader />
  }
  if (caseStudiesError) {
    console.log("caseStudiesError", caseStudiesError);
  }
  console.log("caseStudiesListData", caseStudiesListData);
  return (
    <div>
      {caseStudiesListData?.caseStudies?.map((singleCaseStudy) => (
        <div
          className="p-6 hover:bg-neutral-800 group rounded-xl transition-all grid grid-cols-12 gap-6"
          key={singleCaseStudy?.documentId}
        >
          <div className="relative h-[210px] rounded-xl overflow-hidden col-span-3">
            {singleCaseStudy?.thumbnail?.url && (
              <Image
                src={singleCaseStudy?.thumbnail?.url}
                fill
                alt="card-icon"
              />
            )}
          </div>
          <div className="flex flex-col justify-between gap-6 col-span-6">
            <div>
              <h3 className="text-heading-xs text-neutral-100 mb-2">
                {singleCaseStudy?.title}
              </h3>
              <p className="text-label-md text-neutral-400">
                {singleCaseStudy?.description}
              </p>
            </div>
            <div className="text-caption-lg text-neutral-500">
              {singleCaseStudy?.categories?.map((singleCategory) => {
                return (
                  <span
                    key={singleCategory?.documentId}
                    className="after:content-['•'] after:mx-2 after:text-accent-600 capitalize last:after:content-none"
                  >
                    {singleCategory?.name}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 col-span-3">
            <div>
              {singleCaseStudy?.tags &&
                singleCaseStudy?.tags.map((singleTag) => {
                  return (
                    <p
                      key={singleTag?.documentId}
                      className="py-2 px-3 text-caption-lg uppercase text-neutral-200 rounded-full bg-neutral-800 w-fit ml-auto mb-2"
                    >
                      {singleTag?.name}
                    </p>
                  );
                })}
            </div>
            <div className="flex justify-end">
              <ButtonTag
                icon={<ArrowRight />}
                href={"#"}
                className="group-hover:bg-accent-500 hover:bg-accent-500"
                iconPosition="right"
                label="View Case Study"
                variant={"secondary"}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LabsCaseStudies;
