import Section from "@/components/global/Section";
import { buttonVariants } from "@/components/ui/button";
import { LabsFilLandingPageQuery } from "@/lib/codegen/graphql";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import CircleInside from "@/public/CircleInside.svg";

const LabsFilFifthSection = ({
  fifthSectionData,
}: {
  fifthSectionData: NonNullable<
    LabsFilLandingPageQuery["labsFilLandingPage"]
  >["fifthSection"];
}) => {
  return (
    <Section>
      <h2 className="text-heading-xs text-neutral-100 mb-3">
        {fifthSectionData?.heading}
      </h2>
      <p className="text-label-md text-neutral-200 mb-6 sm:mb-12">
        {fifthSectionData?.description}
      </p>
      <div className="flex items-center gap-6 ">
        <div className="relative flex flex-col items-center">
          {/* Dashed line */}
          <div className="absolute top-0 bottom-0 w-px border-l border-dashed border-green-500/60" />

          {fifthSectionData?.cards &&
            fifthSectionData?.cards.map((_, index, array) => (
              <Image
                src={CircleInside}
                alt="CircleInside"
                key={index}
                className={cn(
                  "relative z-10",
                  index !== array.length - 1 && "mb-24"
                )}
              />
            ))}
        </div>
        <div className="flex flex-col gap-4 sm:gap-6  grow">
          {fifthSectionData?.cards &&
            fifthSectionData?.cards.length > 0 &&
            fifthSectionData?.cards?.map((singleCard) => {
              return (
                <div
                  key={singleCard?.id}
                  className="rounded-xl p-5 bg-neutral-800 group transition-all duration-1000"
                >
                  <h3 className="text-label-4xl text-neutral-100 mb-3">
                    {singleCard?.heading}
                  </h3>
                  <p className="text-label-md text-neutral-400 ">
                    {singleCard?.heading}
                  </p>
                  <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-20 group-hover:mt-6">
                    <Link
                      href={singleCard?.link?.href || "#"}
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      )}
                    >
                      {singleCard?.link?.name || "Apply"}
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Section>
  );
};

export default LabsFilFifthSection;
