import Section from "@/components/global/Section";
import { buttonVariants } from "@/components/ui/button";
import { LabSingleTypeQuery } from "@/lib/codegen/graphql";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type LabsCardSection = Extract<
  NonNullable<
    NonNullable<LabSingleTypeQuery["labSingleType"]>["detailSection"]
  >[number],
  { __typename: "ComponentLabsCardSection" }
>;

const ThirdSection = ({ cardsData }: { cardsData?: LabsCardSection[] }) => {
  const thirdSectionData = cardsData?.[1];
  return (
    <Section className="flex flex-col justify-between gap-4 sm:gap-6">
      <h2 className="text-heading-xs  text-neutral-800 mb-6 sm:mb-12">
        {thirdSectionData?.heading}
      </h2>
      {thirdSectionData?.cards &&
        thirdSectionData?.cards?.map((singleCard) => {
          return (
            <div
              className="p-6 hover:bg-neutral-100 group rounded-xl transition-all grid grid-cols-12 gap-6"
              key={singleCard?.id}
            >
              <div className="relative h-[210px] rounded-xl overflow-hidden col-span-3">
                {singleCard?.cardImage?.url && (
                  <Image
                    src={singleCard?.cardImage?.url}
                    fill
                    alt="card-icon"
                  />
                )}
              </div>
              <div className="flex flex-col justify-between gap-6 col-span-6">
                <div>
                  <h3 className="text-heading-xs text-heading-800 mb-2">
                    {singleCard?.heading}
                  </h3>
                  <p className="text-label-md text-neutral-600">
                    {singleCard?.description?.[0]?.children?.[0]?.text}
                  </p>
                </div>
                <div className="text-caption-lg text-neutral-500">
                  <span className="after:content-['•'] after:mx-2 after:text-accent-600 capitalize last:after:content-none">
                    Review rigour
                  </span>
                  <span className="after:content-['•'] after:mx-2 after:text-accent-600 capitalize last:after:content-none">
                    prioritisation logic
                  </span>
                  <span className="after:content-['•'] after:mx-2 after:text-accent-600 capitalize last:after:content-none">
                    sharper critique conversations
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-6 col-span-3">
                <div>
                  <p className="py-2 px-3 text-caption-lg uppercase text-neutral-700 rounded-full bg-neutral-100 group-hover:bg-neutral-50  w-fit ml-auto mb-2">
                    Shopify API
                  </p>
                  <p className="py-2 px-3 text-caption-lg uppercase text-neutral-700 rounded-full bg-neutral-100 group-hover:bg-neutral-50  w-fit ml-auto mb-2">
                    tool calls
                  </p>
                  <p className="py-2 px-3 text-caption-lg uppercase text-neutral-700 rounded-full bg-neutral-100 group-hover:bg-neutral-50  w-fit ml-auto mb-2">
                   recommendation logic
                  </p>
                </div>
                <div className="flex justify-end">
                  <Link
                    href="#"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "bg-neutral-50 transition-all group-hover:bg-accent-600 text-label-3xs"
                    )}
                  >
                    View Case Study
                    <ArrowRight/>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </Section>
  );
};

export default ThirdSection;
