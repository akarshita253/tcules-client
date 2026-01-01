import Section from "@/components/global/Section";
import { Button } from "@/components/ui/button";
import { HomepageQuery } from "@/lib/codegen/graphql";
import { cn } from "@/lib/utils";
import Image from "next/image";

const HomepageFourthSection = ({
  fourthSectionData,
}: {
  fourthSectionData: NonNullable<HomepageQuery["homepage"]>["fourthSection"];
}) => {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="p-8 flex flex-col justify-between gap-4 bg-accent-500 rounded-xl">
          <div className="flex justify-end">
            {fourthSectionData?.icon?.url && (
              <Image
                src={fourthSectionData?.icon?.url}
                alt="Third section icon"
                width={60}
                height={60}
                className="scale-125"
              />
            )}
          </div>
          <div>
            <h3 className="text-heading-sm text-neutral-900 mb-3">
              {fourthSectionData?.heading}
            </h3>
            <p className="text-label-2xl text-neutral-900 mb-9">
              {fourthSectionData?.description}
            </p>
            <Button className="bg-neutral-900 text-neutral-50">
              {fourthSectionData?.button?.name}
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {fourthSectionData?.cards &&
            fourthSectionData?.cards.length > 0 &&
            fourthSectionData?.cards?.map((card, index) => {
              return (
                <div
                  className={cn(
                    "p-8 col-span-6 flex flex-col justify-between gap-4 rounded-xl relative overflow-hidden",
                    index === 2 && "col-span-12"
                  )}
                  key={card?.id}
                >
                  <div>
                    <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
                    {card?.cardImage?.url && (
                      <Image
                        src={card?.cardImage?.url}
                        alt={card?.cardImage?.alternativeText || "card-icon"}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="absolute bottom-0">
                    <h3 className="text-heading-xs text-neutral-50 mb-4 sm:mb-6 z-20">
                      {card?.heading}
                    </h3>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Section>
  );
};

export default HomepageFourthSection;
