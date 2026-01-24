import ButtonTag from "@/components/shared/ButtonTag";
import { BlogsQuery } from "@/lib/codegen/graphql";

const CtaSection = ({ctaSectionData}:{ctaSectionData: NonNullable<BlogsQuery["blogs"][0]>["ctoSection"]}) => {
  return (
    <section className="py-16 sm:py-[120px]">
        <p className="text-center text-label-sm text-neutral-800 uppercase">
          {ctaSectionData?.description}
        </p>
        <h2 className="text-center">
          
          <span className="text-display-sm text-accent-500">{ctaSectionData?.heading?.split("|").at(0)}</span>
          <span className="text-heading-md">{ctaSectionData?.heading?.split("|").at(1)}</span>
        </h2>
        <div className="mt-8 flex justify-center items-center">
          <ButtonTag label={ctaSectionData?.link?.name||"Learn More"} href={ctaSectionData?.link?.href||"#"}/>
        </div>
    </section>
  );
};

export default CtaSection;
