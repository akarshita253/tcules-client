import Section from "@/components/global/Section";
import { ProgrammaticSeoPagesQuery } from "@/lib/codegen/graphql";

const PseoFifthSection = ({
  fifthSectionData,
}: {
  fifthSectionData: NonNullable<
    ProgrammaticSeoPagesQuery["programmaticSeoPages"][number]
  >["fifthSection"];
}) => {
  const [first, highlight, rest] =
    fifthSectionData?.heading?.split("|").map((s) => s.trim()) ?? [];
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-8 flex flex-col justify-between gap-2 rounded-xl min-h-[300px]">
          <h3>
            <span className="text-neutral-900 text-heading-sm">{first}</span>{" "}
            <span className="text-accent-600 text-display-xs">{highlight}</span>{" "}
            <span className="text-neutral-900 text-heading-sm">{rest}</span>
          </h3>
          <p className="text-label-2xs text-neutral-700">
            {fifthSectionData?.description}
          </p>
        </div>
        {fifthSectionData?.cards &&
          fifthSectionData?.cards.length > 0 &&
          fifthSectionData?.cards.map((card) => (
            <div
              key={card?.id}
              className="p-8 flex flex-col justify-between gap-2 rounded-xl bg-noise min-h-[300px]"
            >
              <h3 className="text-heading-2xs text-neutral-900">
                {card?.heading}
              </h3>
              <p className="text-label-md text-neutral-700">
                {card?.description}
              </p>
            </div>
          ))}
      </div>
    </Section>
  );
};

export default PseoFifthSection;
