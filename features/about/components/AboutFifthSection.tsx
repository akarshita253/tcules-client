import Section from "@/components/global/Section";
import { AboutQuery } from "@/lib/codegen/graphql";
import Image from "next/image";
import React from "react";

const AboutFifthSection = ({
  fifthSectionData,
}: {
  fifthSectionData: NonNullable<AboutQuery["about"]>["fifthSection"];
}) => {
  return (
    <Section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <h2 className="p-8 text-heading-lg text-neutral-800">
        {fifthSectionData?.heading}
      </h2>
      {fifthSectionData?.cardDetails &&
        fifthSectionData?.cardDetails.map((cardDetail) => (
          <div key={cardDetail?.id} className="p-8 rounded-[12px] bg-neutral-50">
            {cardDetail?.profilePicture?.url && (
              <div className="w-[146px] h-[146px] flex items-center justify-center roundex-full overflow-hidden mb-9 z-10">
                <Image
                  src={cardDetail?.profilePicture?.url ?? ""}
                  alt="profile-image"
                  width={cardDetail?.profilePicture?.width||146}
                  height={cardDetail?.profilePicture?.height||146}
                  className="object-cover"
                />
              </div>
            )}
            <p className="text-label-3xl text-neutral-900 mb-6">
              {cardDetail?.description}
            </p>
            <p className="text-label-sm text-neutral-600">
              {cardDetail?.designation}
            </p>
          </div>
        ))}
    </Section>
  );
};

export default AboutFifthSection;
