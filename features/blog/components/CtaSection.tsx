import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 sm:py-[120px]">
        <p className="text-center uppercase text-[14px] leading-[140%]">
          Experience unmatched design service
        </p>
        <h2 className=" md:text-8xl text-7xl text-center">
          <span className="italic text-[#03C945] font-playfair">Flexible,</span>
          <span className="font-bricolage">fast and affordable</span>
        </h2>
        <div className="mt-8 flex justify-center items-center">
          <Button className="uppercase">Start your project</Button>
        </div>
    </section>
  );
};

export default CtaSection;
