import Section from "@/components/global/Section";
import { ProgrammaticSeoPagesQuery } from "@/lib/codegen/graphql";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PseoResourceSection = ({
  resourcesData,
}: {
  resourcesData: NonNullable<
    ProgrammaticSeoPagesQuery["programmaticSeoPages"][number]
  >["resourceSection"];
}) => {
  return (
    <Section>
      <div className="flex justify-between items-center mb-12 gap-4">
        <h2 className="text-heading-xs text-neutral-800">
          {resourcesData?.heading}
        </h2>
        <Link
          href={resourcesData?.link?.href || "#"}
          className="flex gap-2 items-center"
        >
          <span className="text-caption-lg text-neutral-600">
            {resourcesData?.link?.name}
          </span>
          <span>
            <ChevronRight size={16} />
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resourcesData?.case_studies &&
          resourcesData?.case_studies.length > 0 &&
          resourcesData?.case_studies.map((singleCaseStudy) => (
            <div
              key={singleCaseStudy?.slug}
              className="bg-noise rounded-xl overflow-hidden p-2"
            >
              <Link href={`/projects/${singleCaseStudy?.slug}`}>
                <div className="relative w-full h-[323px] mb-3">
                  <Image
                    alt={singleCaseStudy?.thumbnail?.alternativeText || ""}
                    src={singleCaseStudy?.thumbnail?.url || ""}
                    fill
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-neutral-50 text-heading-2xs mb-3">{singleCaseStudy?.title}</h3>
                    <p className="text-neutral-50 text-label-sm">{singleCaseStudy?.description}</p>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-caption-lg text-neutral-700 mb-1">OUTCOMES</p>
                  <p className="text-label-2xs text-neutral-900 mb-6">
                    {singleCaseStudy?.categories?.map((category) => category?.name).join(", ")}
                  </p>
                  <div className="flex gap-2 flex-wrap items-center">
                    {singleCaseStudy?.tags?.map((tag) => (
                      <span
                        key={tag?.name}
                        className="text-caption-lg text-neutral-800  px-3 py-2 rounded-full bg-neutral-50"
                      >
                        {tag?.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </Section>
  );
};

export default PseoResourceSection;
