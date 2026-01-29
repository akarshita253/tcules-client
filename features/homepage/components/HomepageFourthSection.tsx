import Section from "@/components/global/Section";
import ButtonTag from "@/components/shared/ButtonTag";
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
        <div className="p-8 flex flex-col justify-between gap-4 rounded-xl">
          <div className="flex justify-end">
            {fourthSectionData?.icon?.url && (
              <Image
                src={fourthSectionData?.icon?.url}
                alt="Third section icon"
                width={96}
                height={96}
                className="scale-125"
              />
            )}
          </div>
          <div>
            <h3 className="flex flex-col mb-3">
              <span className="text-display-xs text-neutral-600">{fourthSectionData?.heading?.split("|").at(0)}</span>
              <span className="text-heading-sm capitalize text-neutral-50">{fourthSectionData?.heading?.split("|").at(1)}</span>
            </h3>
            <p className="text-label-2xl text-neutral-50 mb-9">
              {fourthSectionData?.description}
            </p>
            <ButtonTag label={fourthSectionData?.button?.name||"Button"} href={fourthSectionData?.button?.href||"#"}/>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
          {fourthSectionData?.cards &&
            fourthSectionData?.cards.length > 0 &&
            fourthSectionData?.cards?.map((card, index) => {
              return (
                <div
                  className={cn(
                    "p-8 sm:col-span-6 flex flex-col justify-between gap-4 bg-neutral-800 rounded-lg relative overflow-hidden  min-h-[234px]",
                    index === 2 && "sm:col-span-12"
                  )}
                  key={card?.id}
                >
                  <div className="flex justify-end">
                    {card?.cardImage?.url && (
                      <Image
                        src={card?.cardImage?.url}
                        alt={card?.cardImage?.alternativeText || "card-icon"}
                        width={card?.cardImage?.width||40}
                        height={card?.cardImage?.height||40}
                        className="object-cover"
                      />
                    )}
                  </div>
                  <h3 className="text-heading-xs text-neutral-50 ">
                    {card?.heading}
                  </h3>
                </div>
              );
            })}
        </div>
      </div>
    </Section>
  );
};

export default HomepageFourthSection;
