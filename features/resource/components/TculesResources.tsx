"use client";
import Section from "@/components/global/Section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import Service from "@/public/service.svg";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CgClose } from "react-icons/cg";

const TculesResources = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [dropdownState, setDropdownState] = useState(false);
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
    setDropdownState(false);
  };

  const handleDeleteFilter = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("filter");
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <Section>
      <h2 className="text-heading-xs text-neutral-800 mb-6">
        Tcules resources
      </h2>
      <div className="sm:mb-12 mb-6">
        <p className="text-caption-xs text-neutral-500">Filter by :</p>
        <div>
          <Button
            variant={"link"}
            className="text-neutral-700 text-label-lg px-0 no-underline"
            onClick={() => setDropdownState((prev) => !prev)}
          >
            All
            <ChevronDown />
          </Button>
          {dropdownState && (
            <div className="absolute z-10 mt-2 w-40 rounded-lg bg-neutral-50 border border-neutral-200">
              <ul>
                <li
                  className="py-2 px-4 hover:bg-neutral-100 cursor-pointer"
                  onClick={() => handleFilterChange("all")}
                >
                  All
                </li>
                <li
                  className="py-2 px-4 hover:bg-neutral-100 cursor-pointer"
                  onClick={() => handleFilterChange("blog")}
                >
                  Blog
                </li>
                <li
                  className="py-2 px-4 hover:bg-neutral-100 cursor-pointer"
                  onClick={() => handleFilterChange("case-studies")}
                >
                  Case Studies
                </li>
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
                  <span className="text-neutral-700 capitalize">{filterItem}</span>
                  <span>
                    <CgClose className="text-neutral-400"/>
                  </span>
                </span>
              );
            })}
            {activeFilters.length > 0 && activeFilters !== undefined && <span className="text-neutral-700 capitalize cursor-pointer" onClick={handleDeleteFilter}>Clear all</span>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-12 gap-x-4 md:gap-x-6">
        {/* <Card className="relative w-full overflow-hidden gap-0 pb-0">
          <CardHeader className="h-[344px] relative rounded-xl overflow-hidden mb-4">
            <Image src={Service} alt="Service" fill objectFit="cover" />
            <small className="bg-neutral-50 rounded-full text-neutral-800 absolute top-4 left-4 text-caption-lg py-1.5 px-3.5">
              Blog
            </small>
          </CardHeader>
          <CardContent className="mb-6">
            <CardTitle>
              <h3 className="text-heading-2xs">
                Do AI Not For AIs Sake But For Your User: Insights from Eden AIs
                CTPO
              </h3>
            </CardTitle>
          </CardContent>
          <CardFooter className="flex-col text-neutral-600 gap-2">
            <span className="text-label-md">1 Mar ‘24</span>
            <span>{" . "}</span>
            <span className="text-label-md">11 mins</span>
          </CardFooter>
        </Card>
        <Card className="relative w-full overflow-hidden gap-0 pb-0">
          <CardHeader className="h-[344px] relative rounded-xl overflow-hidden mb-4">
            <Image src={Service} alt="Service" fill objectFit="cover" />
            <small className="bg-neutral-50 rounded-full text-neutral-800 absolute top-4 left-4 text-caption-lg py-1.5 px-3.5">
              Blog
            </small>
          </CardHeader>
          <CardContent className="mb-6">
            <CardTitle>
              <h3 className="text-heading-2xs">
                Do AI Not For AIs Sake But For Your User: Insights from Eden AIs
                CTPO
              </h3>
            </CardTitle>
          </CardContent>
          <CardFooter className="flex-col text-neutral-600 gap-2">
            <span className="text-label-md">1 Mar ‘24</span>
            <span>{" . "}</span>
            <span className="text-label-md">11 mins</span>
          </CardFooter>
        </Card>
        <Card className="relative w-full overflow-hidden gap-0 pb-0">
          <CardHeader className="h-[344px] relative rounded-xl overflow-hidden mb-4">
            <Image src={Service} alt="Service" fill objectFit="cover" />
            <small className="bg-neutral-50 rounded-full text-neutral-800 absolute top-4 left-4 text-caption-lg py-1.5 px-3.5">
              Blog
            </small>
          </CardHeader>
          <CardContent className="mb-6">
            <CardTitle>
              <h3 className="text-heading-2xs">
                Do AI Not For AIs Sake But For Your User: Insights from Eden AIs
                CTPO
              </h3>
            </CardTitle>
          </CardContent>
          <CardFooter className="flex-col text-neutral-600 gap-2">
            <span className="text-label-md">1 Mar ‘24</span>
            <span>{" . "}</span>
            <span className="text-label-md">11 mins</span>
          </CardFooter>
        </Card>
        <Card className="relative w-full overflow-hidden gap-0 pb-0">
          <CardHeader className="h-[344px] relative rounded-xl overflow-hidden mb-4">
            <Image src={Service} alt="Service" fill objectFit="cover" />
            <small className="bg-neutral-50 rounded-full text-neutral-800 absolute top-4 left-4 text-caption-lg py-1.5 px-3.5">
              Blog
            </small>
          </CardHeader>
          <CardContent className="mb-6">
            <CardTitle>
              <h3 className="text-heading-2xs">
                Do AI Not For AIs Sake But For Your User: Insights from Eden AIs
                CTPO
              </h3>
            </CardTitle>
          </CardContent>
          <CardFooter className="flex-col text-neutral-600 gap-2">
            <span className="text-label-md">1 Mar ‘24</span>
            <span>{" . "}</span>
            <span className="text-label-md">11 mins</span>
          </CardFooter>
        </Card> */}
      </div>
    </Section>
  );
};

export default TculesResources;
