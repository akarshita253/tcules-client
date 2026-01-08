import Section from "@/components/global/Section";
import { ContactUsQuery } from "@/lib/codegen/graphql";
import Image from "next/image";
import Link from "next/link";

type ContactUsCards = NonNullable<
  NonNullable<ContactUsQuery["contactUs"]>["cards"]
>;

const BottomCards = ({ cardsData }: { cardsData: ContactUsCards }) => {
  return (
    <Section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cardsData &&
        cardsData.map((singleCard) => {
          return (
            <div
              key={singleCard?.id}
              className="rounded-xl p-[38px] border flex flex-col justify-between gap-6 border-neutral-100 bg-neutral-50 shadow-[0_4px_45.1px_0_rgba\(0,0,0,0.03\)]"
            >
              {singleCard?.icon?.url && (
                <div className="flex items-center justify-center">
                  <Image
                    src={singleCard?.icon?.url}
                    width={singleCard?.icon?.width || 40}
                    height={singleCard?.icon?.height || 40}
                    alt={singleCard?.icon?.alternativeText || "icon"}
                  />
                </div>
              )}
              <h3 className="text-heading-2xs text-neutral-700 text-center">
                {singleCard?.heading}
              </h3>
              <div className="flex justify-center items-center">
                <Link
                  href={singleCard?.link?.href || "#"}
                  className="text-center text-accent-500"
                >
                  {singleCard?.link?.name}
                </Link>
              </div>
            </div>
          );
        })}
    </Section>
  );
};

export default BottomCards;
