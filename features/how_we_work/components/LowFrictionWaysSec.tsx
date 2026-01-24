import Image from "next/image";
import Section from "@/components/global/Section";
import { Block } from "@/components/global/Block";
import Sub from "@/public/Sub2.png";
import { Container } from "@/components/global/Container";
import { CircleDot } from "lucide-react";
import { HowWeWorkQuery } from "@/lib/codegen/graphql";
import ButtonTag from "@/components/shared/ButtonTag";

const LowFrictionWaysSec = ({
  lowFrictionWaysData,
}: {
  lowFrictionWaysData: NonNullable<
    NonNullable<HowWeWorkQuery["howWeWork"]>["thirdSection"]
  >;
}) => {
  return (
    <Container className="md:grid grid-cols-12 gap-6">
      <Block className="lg:col-start-2 col-start-1 lg:col-end-12 col-end-13">
        <Section>
          <h2 className="text-heading-xs text-neutral-800 mb-6">
            {lowFrictionWaysData?.heading}
          </h2>
          <div className="flex flex-col justify-between gap-6">
            {lowFrictionWaysData?.details &&
              lowFrictionWaysData?.details.map((singleDetail, index) => {
                return (
                  <div
                    className="p-[38px] bg-neutral-50 rounded-xl shadow-[0_4px_45.1px_0_rgba(0,0,0,0.03)] relative"
                    key={singleDetail?.id}
                  >
                    <div
                      className={
                        index % 2 === 0
                          ? "absolute bottom-0"
                          : "absolute bottom-0 right-0"
                      }
                    >
                      <Image src={Sub} alt="Sub" width={376} height={376} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 mb-6 z-10">
                      <h3 className="text-heading-xs text-neutral-800 z-10">
                        {singleDetail?.heading}
                      </h3>
                      <div className="flex justify-between flex-col gap-4">
                        {singleDetail?.points &&
                          singleDetail?.points.map((singlePoint) => {
                            return (
                              <p
                                className="flex gap-3 items-center text-label-xl z-10"
                                key={singlePoint?.id}
                              >
                                <span>
                                  <CircleDot
                                    className="text-accent-500"
                                    size={16}
                                  />
                                </span>
                                <span>{singlePoint?.listText}</span>
                              </p>
                            );
                          })}
                      </div>
                    </div>
                    <div className="flex justify-end z-10">
                      <ButtonTag
                        variant={"secondary"}
                        label={singleDetail?.button?.name || "Learn More"}
                        className="z-10"
                        href={singleDetail?.button?.href || "#"}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </Section>
      </Block>
    </Container>
  );
};

export default LowFrictionWaysSec;
