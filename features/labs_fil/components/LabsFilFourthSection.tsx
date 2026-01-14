import Section from '@/components/global/Section';
import { LabsFilLandingPageQuery } from '@/lib/codegen/graphql';
import Image from 'next/image';

type LabsFilFourthSectionType = NonNullable<
  NonNullable<LabsFilLandingPageQuery["labsFilLandingPage"]>["fourthSection"]
>;

const LabsFilFourthSection = ({fourthSectionData}:{fourthSectionData:LabsFilFourthSectionType}) => {
  return (
       <Section>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-3 mb-12">
        <div className="p-8 flex flex-col justify-end">
          {/* <div className="flex justify-end">
            {fourthSectionData?.fourthSection?.icon?.url && (
              <Image
                src={fourthSectionData?.fourthSection?.icon?.url}
                alt="Third section icon"
                width={40}
                height={40}
              />
            )}
          </div> */}
          <h3 className="flex flex-col">
            <span className="text-display-sm text-accent-500">
              {fourthSectionData?.fourthSection?.heading?.split("|").at(0)}
            </span>
            <span className="text-heading-sm text-neutral-50">
              {fourthSectionData?.fourthSection?.heading?.split("|").at(1)}
            </span>
          </h3>
        </div>
        {fourthSectionData?.fourthSection?.cards &&
          fourthSectionData?.fourthSection?.cards.length > 0 &&
          fourthSectionData?.fourthSection?.cards?.map((card) => {
            return (
              <div
                className="p-8 flex flex-col justify-between gap-4 min-h-[292px] bg-neutral-800 rounded-xl"
                key={card?.id}
              >
                {/* <div className="flex justify-end">
                  {card?.icon && (
                    <Image
                      src={card?.icon?.url}
                      alt={card?.icon?.alternativeText || "card-icon"}
                      width={40}
                      height={40}
                    />
                  )}
                </div> */}
                  <h3 className="text-heading-xs text-neutral-50 mb-4 sm:mb-6">
                    {card?.heading}
                  </h3>
                  <p className="text-label-2xl text-neutral-200">
                    {card?.description}
                  </p>
              </div>
            );
          })}
      </div>
      <h3 className="text-accent-500 text-heading-xs text-center">{fourthSectionData?.description?.split("|")[0]}</h3>
      <h3 className="text-accent-500 text-heading-xs text-center">{fourthSectionData?.description?.split("|")[1]}</h3>
    </Section>
  )
}

export default LabsFilFourthSection
