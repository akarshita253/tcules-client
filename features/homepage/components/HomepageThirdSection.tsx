import Section from "@/components/global/Section";
import { HomepageQuery } from "@/lib/codegen/graphql";
import Image from "next/image";
import Link from "next/link";

const HomepageThirdSection = ({
  thirdSectionData,
}: {
  thirdSectionData?: NonNullable<HomepageQuery["homepage"]>["thirdSection"];
}) => {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-neutral-50 rounded-xl p-2">
        <div className="p-8">
          <div className="flex justify-center items-center">
            {/* {thirdSectionData?.icon?.url && (
              <Image
                src={thirdSectionData?.icon?.url}
                alt="Third section icon"
                width={40}
                height={40}
              />
            )} */}
          </div>
          <h3>
            <span className="text-display-xs text-accent-600">
              {thirdSectionData?.heading?.split("|").at(0)}
            </span>
            <span className="text-heading-sm text-neutral-900">
              {thirdSectionData?.heading?.split("|").at(1)}
            </span>
          </h3>
        </div>
        {
          thirdSectionData?.cards && thirdSectionData?.cards.length>0 && thirdSectionData?.cards?.map((card) => {
            return (
              <div className="relative p-8 flex flex-col bg-noise justify-between gap-4 overflow-hidden bg-neutral-100 rounded-xl" key={card?.id}>
                <div className="flex justify-end">
                  <Link href={card?.href || "#"}>
                  {card?.icon&& <Image src={card?.icon?.url} alt={card?.icon?.alternativeText||"card-icon"} width={40} height={40}/>}
                  </Link>
                </div>
                <div>
                  <h3 className="text-heading-xs text-neutral-900 mb-4 sm:mb-6">{card?.heading}</h3>
                  <p className="text-label-xl text-neutral-900">{card?.description}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </Section>
  );
};

export default HomepageThirdSection;
