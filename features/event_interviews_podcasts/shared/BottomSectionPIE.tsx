import Section from "@/components/global/Section";
import ButtonTag from "@/components/shared/ButtonTag";
import { Input } from "@/components/ui/input";

const BottomSectionPIE = () => {
  return (
    <Section className="text-center">
      <p className="text-label-2xs text-neutral-600 uppercase">Live sessions</p>
      <h2 className="mb-4">
        <span className="text-heading-md text-neutral-800">Learn together</span>
        <span className="text-display-sm text-accent-600 ml-2">
          live
        </span>
      </h2>
      <p className="text-label-xl text-neutral-800 mb-9 sm:w-3/5 mx-auto">
        We host workshops and conversations with practitioners. We’ll notify you
        when the next session is scheduled.
      </p>
      <div className="flex justify-center items-center gap-2">
        <Input placeholder="Enter your email" className="w-64"/>
        <ButtonTag label="Notify me" href="#"/>
      </div>
    </Section>
  );
};

export default BottomSectionPIE;
