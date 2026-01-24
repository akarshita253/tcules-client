import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 sm:py-[120px]">
        <p className="text-center text-label-sm text-neutral-800 uppercase">
          Experience unmatched design service
        </p>
        <h2 className="text-center">
          <span className="text-display-sm text-[#03C945]">Flexible,</span>
          <span className="text-heading-md">fast and affordable</span>
        </h2>
        <div className="mt-8 flex justify-center items-center">
          <Button>Start your project</Button>
        </div>
    </section>
  );
};

export default CtaSection;
