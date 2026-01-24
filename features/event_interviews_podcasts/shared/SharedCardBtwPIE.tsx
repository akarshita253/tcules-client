import ButtonTag from "@/components/shared/ButtonTag";
import { EventsQuery } from "@/lib/codegen/graphql";
import { cn } from "@/lib/utils";
type ShadowCard = Extract<
  NonNullable<NonNullable<EventsQuery["events"][0]>["mainSection"]>[number],
  { __typename: "ComponentPodcasteEventsInterviewsShadowCard" }
>;
const SharedCardBtwPIE = ({ cardData }: { cardData: ShadowCard }) => {
  const { heading, description, link } = cardData;
  if (link && link.href) {
    return (
      <div
        className={cn(
          "rounded-xl sm:py-[84px] py-12 px-4 sm:px-6 flex justify-between items-center gap-4",
          cardData?.isBackgroundAvailable && "bg-neutral-100",
          cardData?.isShadowVisible && "shadow-[0_4px_45.1px_0_rgb(0_0_0/0.03)]"
        )}
      >
        <div>
          <p className="text-label-2xs text-neutral-600 uppercase">
            {" "}
            {heading}
          </p>
          <h2 className="text-heading-xs text-neutral-800">{description}</h2>
        </div>
        <div>
          <ButtonTag label={link?.name||"Know More"} href={link?.href||"#"}/>
        </div>
      </div>
    );
  }
  return (
    <div
      className={cn(
        "rounded-xl sm:py-[84px] py-12 px-4 sm:px-6 flex justify-between items-center gap-4",
        cardData?.isBackgroundAvailable && "bg-neutral-100",
        cardData?.isShadowVisible && "shadow-[0_4px_45.1px_0_rgb(0_0_0/0.03)]"
      )}
    >
      {heading && (
        <h3 className="text-heading-xs text-neutral-800">{heading}</h3>
      )}
      <p
        className={cn(
          heading
            ? "text-label-md text-neutral-700"
            : "text-label-2xl text-neutral-900"
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default SharedCardBtwPIE;
