import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-[120px]">
        <p className="text-center uppercase leading-[140%]">
          Experience unmatched design service
        </p>
        <h2 className="text-[56px] leading-[130%] text-center">
          <span className="italic text-[#03C945]">Flexible,</span>
          <span>fast and affordable</span>
        </h2>
        <div className="mt-8 flex justify-center items-center">
          <Button>Start your project</Button>
        </div>
    </section>
  );
};

export default CtaSection;
