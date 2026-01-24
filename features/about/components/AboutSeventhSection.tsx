import Section from "@/components/global/Section";
import ButtonTag from "@/components/shared/ButtonTag";
import { AboutQuery } from "@/lib/codegen/graphql";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const AboutSeventhSection = ({
  seventhSectionData,
}: {
  seventhSectionData: NonNullable<AboutQuery["about"]>["seventhSection"];
}) => {
  return (
    <>
      <Section>
        <div className="p-2 grid grid-cols-1 sm:grid-cols-2 gap-2 bg-neutral-50 rounded-xl">
          {seventhSectionData?.cardDetails &&
            seventhSectionData?.cardDetails.map((cardDetail, index) => {
              return (
                <div
                  key={cardDetail?.id}
                  className={cn(
                    "p-8 rounded-xl ",
                    index === 0 ? "bg-neutral-100" : "bg-neutral-900"
                  )}
                >
                  <Link href={cardDetail?.link?.href||"#"}>
                    {cardDetail?.icon?.url && (
                      <div className="flex justify-end mb-16">
                        <Image
                          src={cardDetail?.icon?.url}
                          alt="icon-image"
                          width={40}
                          height={40}
                        />
                      </div>
                    )}
                    <h3
                      className={
                        index === 0
                          ? "text-neutral-900  text-heading-sm mb-6"
                          : "text-neutral-50 text-heading-sm mb-6"
                      }
                    >
                      {cardDetail?.heading}
                    </h3>
                    <p
                      className={
                        index === 0
                          ? "text-neutral-900  text-label-xl"
                          : "text-neutral-50 text-label-xl"
                      }
                    >
                      {cardDetail?.description}
                    </p>
                  </Link>
                </div>
              );
            })}
        </div>
      </Section>
      <Section>
        <h2 className="text-heading-xs text-neutral-800 mb-9 sm:w-4/5 mx-auto text-center">
          {seventhSectionData?.heading}
        </h2>
        <div className="flex justify-center items-center">
          <ButtonTag variant={"secondary"} label={seventhSectionData?.link?.name||"Link"} href={seventhSectionData?.link?.href||""}/>
        </div>
      </Section>
    </>
  );
};

export default AboutSeventhSection;
