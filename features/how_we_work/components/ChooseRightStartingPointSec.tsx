import Section from "@/components/global/Section";
import { Button } from "@/components/ui/button";
import { HowWeWorkQuery } from "@/lib/codegen/graphql";
import { ArrowRight, CircleDot } from "lucide-react";

const ChooseRightStartingPointSec = ({
  rightStartingPointData,
}: {
  rightStartingPointData: NonNullable<
    NonNullable<HowWeWorkQuery["howWeWork"]>["secondSection"]
  >;
}) => {
  return (
    <Section>
      <h2 className="text-heading-xs text-neutral-800 mb-6 sm:mb-12">
        {rightStartingPointData?.heading}
      </h2>
      <div className="flex flex-col gap-6 sm:gap-12">
        {rightStartingPointData.leftCard !== undefined &&
          rightStartingPointData?.leftCard &&
          rightStartingPointData.leftCard.map((singleCard) => {
            return (
              <div id="how-we-work-card" key={singleCard?.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="p-8 bg-neutral-100 rounded-xl flex flex-col justify-between">
                    <h2 className="text-heading-sm text-neutral-800 mb-6 md:mb-0">
                      {singleCard?.heading}
                    </h2>
                    <div>
                      {singleCard?.list &&
                        singleCard?.list.map((singleListItem) => {
                          return (
                            <p
                              className="text-caption-lg uppercase bg-neutral-50 w-fit p-2 rounded-full"
                              key={singleListItem?.id}
                            >
                              {singleListItem?.listText}
                            </p>
                          );
                        })}

                      <p className="text-label-2xl text-neutral-700 w-fit p-2 rounded-full">
                        {singleCard?.description?.[0]?.children?.[0]?.text}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    {singleCard?.details &&
                      singleCard.details.length > 0 &&
                      singleCard.details.map((rightSectionDetails) => {
                        return (
                          <div
                            key={rightSectionDetails?.heading}
                            className="p-8 flex flex-col gap-6 justify-between border rounded-xl min-h-[280px] shadow-[0_4px_45.1px_0_rgba(0,0,0,0.03)] border-neutral-100"
                          >
                            <h2 className="text-heading-2xs text-neutral-800">
                              {rightSectionDetails?.heading}
                            </h2>
                            <div>
                              {rightSectionDetails?.description &&
                                rightSectionDetails?.description.length > 0 &&
                                rightSectionDetails?.description.map((singleDescription) => {
                                  return (
                                    <p
                                      className="flex gap-2 text-label-xl mb-4 sm:mb-6"
                                      key={singleDescription?.id}
                                    >
                                      <span>
                                        <CircleDot className="text-accent-600" />
                                      </span>
                                      <span>{singleDescription?.listText}</span>
                                    </p>
                                  );
                                })}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button className="uppercase">
                    {singleCard?.button?.name}
                    <ArrowRight />
                  </Button>
                </div>
              </div>
            );
          })}
      </div>
    </Section>
  );
};

export default ChooseRightStartingPointSec;
