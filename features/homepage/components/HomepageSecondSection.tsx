"use client"

import { HomepageQuery } from "@/lib/codegen/graphql";
import SecondSectionDynamicContent from "./SecondSectionDynamicContent";

const HomepageSecondSection = ({
  secondSectionData,
}: {
  secondSectionData: NonNullable<HomepageQuery["homepage"]>["secondSection"];
}) => {
  return (
    <div className=" p-2 bg-neutral-50 rounded-xl">

    <div className="relative rounded-lg h-[800px] overflow-hidden">
        <SecondSectionDynamicContent secondSectionData={secondSectionData} />
    </div>
    </div>
  );
};

export default HomepageSecondSection;
