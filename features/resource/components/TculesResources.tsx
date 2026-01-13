"use client";
import Section from "@/components/global/Section";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CgClose } from "react-icons/cg";
import { ResourceQuery } from "@/lib/codegen/graphql";
import ResourcesCaseStudies from "./ResourcesCaseStudies";
import ApolloWrapper from "@/lib/providers/ApolloWrapper";

const TculesResources = ({
  thirdSectionData,
}: {
  thirdSectionData: NonNullable<ResourceQuery["resource"]>["thirdSection"];
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const activeFilters = searchParams.getAll("filter");

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
    setActiveDropdown(null);
  };

  const handleDeleteFilter = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("filter");
    router.push(`?${params.toString()}`, { scroll: false });
  };
  console.log(activeFilters, "this is the third section data");
  return (
    <Section>
      <h2 className="text-heading-xs text-neutral-800 mb-6">
        {thirdSectionData?.heading}
      </h2>
      <div className="sm:mb-12 mb-6">
        <p className="text-caption-xs text-neutral-500">Filter by :</p>
        <div className="flex gap-4">
          {thirdSectionData?.filterResource &&
            thirdSectionData?.filterResource.length > 0 &&
            thirdSectionData?.filterResource?.map((singleFilter) => {
              return (
                <div key={singleFilter?.id}>
                  <Button
                    variant={"link"}
                    className="text-neutral-700 text-label-lg px-0 no-underline"
                    onClick={() => {
                      if (!singleFilter?.id) return;

                      setActiveDropdown(
                        activeDropdown === singleFilter.id
                          ? null
                          : singleFilter.id
                      );
                    }}
                  >
                    {singleFilter?.label}
                    <ChevronDown />
                  </Button>

                  {activeDropdown === singleFilter?.id && (
                    <div className="absolute z-10 mt-2 w-56 p-4 rounded-lg bg-neutral-50 border border-neutral-200 overflow-hidden">
                      <ul className=" flex flex-col gap-2">
                        {singleFilter?.tags &&
                          singleFilter?.tags.length > 0 &&
                          singleFilter?.tags.map((tag, index) => {
                            if (tag) {
                              return (
                                <li
                                  key={index}
                                  className="py-2 px-4 hover:bg-neutral-100 cursor-pointer border rounded-full"
                                  onClick={() =>
                                    handleFilterChange(tag?.name || "Null")
                                  }
                                >
                                  {tag?.name}
                                </li>
                              );
                            }
                          })}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
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
                    <CgClose className="text-neutral-400" />
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
      <ApolloWrapper>
        <ResourcesCaseStudies activeFilters={activeFilters} />
      </ApolloWrapper>
    </Section>
  );
};

export default TculesResources;
