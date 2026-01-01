import Section from "@/components/global/Section";
import { HomepageQuery } from "@/lib/codegen/graphql";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HomepageFifthSection = ({
  fifthSectionData,
}: {
  fifthSectionData: NonNullable<HomepageQuery["homepage"]>["fifthSection"];
}) => {
  return (
    <Section>
      <div className="mb-6 sm:mb-12">
        <h2 className="mb-2">
          <span className="text-heading-sm text-neutral-900">
            {fifthSectionData?.heading?.split("|").at(0)}
          </span>
          <span className="text-display-sm text-accent-600">
            {fifthSectionData?.heading?.split("|").at(1)}
          </span>
        </h2>
        <p className="text-label-xl text-neutral-700">
          {fifthSectionData?.description}
        </p>
      </div>
      <div className="flex flex-col justify-between gap-2">
        {fifthSectionData?.case_studies &&
          fifthSectionData?.case_studies.length > 0 &&
          fifthSectionData?.case_studies.map((item) => (
            <div
              className="bg-neutral-50 flex justify-between items-center py-6 px-8 rounded-xl gap-12"
              key={item?.title}
            >
              <div className="flex items-center gap-4 flex-wrap">
                <h3 className="text-label-xl text-neutral-900 flex-6">
                  {item?.title}
                </h3>
                <div className="flex items-center gap-2">
                  {item?.tags &&
                    item?.tags.length > 0 &&
                    item?.tags.map((tag, index) => (
                      <p
                        className="text-label-2xs  text-neutral-800 bg-neutral-100 py-1.5 px-3 rounded-full"
                        key={index}
                      >
                        {tag?.name}
                      </p>
                    ))}
                </div>
              </div>
              <div>
                <Link href="#">
                  <ArrowRight />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </Section>
  );
};

export default HomepageFifthSection;
