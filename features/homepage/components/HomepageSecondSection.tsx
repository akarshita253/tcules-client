import Section from "@/components/global/Section";
import { HomepageQuery } from "@/lib/codegen/graphql";
import Image from "next/image";
import SecondSectionDynamicContent from "./SecondSectionDynamicContent";

const HomepageSecondSection = ({
  secondSectionData,
}: {
  secondSectionData: NonNullable<HomepageQuery["homepage"]>["secondSection"];
}) => {
  console.log(secondSectionData);
  return (
    <Section className="relative rounded-xl h-[800px] overflow-hidden">
      <div className="bg-neutral-900 opacity-70 inset-0 absolute z-10"></div>
      {secondSectionData?.bgImage?.url && (
        <Image
          src={secondSectionData?.bgImage?.url}
          fill
          className="object-cover"
          alt="Hero section image"
        />
      )}
        <SecondSectionDynamicContent secondSectionData={secondSectionData} />
    </Section>
  );
};

export default HomepageSecondSection;
