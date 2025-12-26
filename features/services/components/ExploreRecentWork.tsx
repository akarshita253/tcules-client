import Section from "@/components/global/Section";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ServiceQuery } from "@/lib/codegen/graphql";

const ExploreRecentWork = ({
  recentWorkSectionData,
}: {
  recentWorkSectionData: NonNullable<
    ServiceQuery["service"]
  >["recentWorkSection"];
}) => {
  return (
    <Section className="border-b border-neutral-200">
      <div className="flex items-center justify-between gap-6 sm:mb-12 mb-6 flex-wrap">
        <h2 className="text-heading-xs text-neutral-800">
          {recentWorkSectionData?.heading}
        </h2>
        <Link
          href={recentWorkSectionData?.exploreLink?.href || "#"}
          className="text-caption-lg flex gap-1 items-center text-neutral-600"
        >
          {recentWorkSectionData?.exploreLink?.name}{" "}
          <ChevronRight className="text-neutral-800" size={16} />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {recentWorkSectionData?.exploreCards?.map((card) => {
          return (
            <div className="p-2 rounded-xl bg-neutral-100" key={card?.id}>
              <div className="relative rounded-xl h-[324px] overflow-hidden mb-3">
                <Image
                  src={card?.cardImage?.url || ""}
                  alt={card?.cardImage?.alternativeText || "Recent Work Image"}
                  fill
                  className="object-cover"
                />
                <div className="p-4 sm:p-6 absolute bottom-0 left-0">
                  <h3 className="text-heading-2xs text-neutral-50">
                    {card?.heading}
                  </h3>
                  <p className="text-label-xs text-neutral-200">
                    {card?.description?.[0]?.children?.[0]?.text}
                  </p>
                </div>
              </div>
              <div className="p-3">
                
                <div className=" mb-4 sm:mb-6">
                  <small className="text-caption-lg text-neutral-700 uppercase">
                    {card?.cardTiles?.at(0)?.heading}
                  </small>
                  <p className="text-label-2xs text-neutral-900">
                    {card?.cardTiles?.at(0)?.description}
                  </p>
                </div>
                <div className="flex items-center flex-wrap gap-4">
                  {card?.list?.map((singleItem) => {
                    return (
                      <p
                        className="bg-white p-2 rounded-full uppercase text-caption-lg"
                        key={singleItem?.id}
                      >
                        {singleItem?.listText}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default ExploreRecentWork;
