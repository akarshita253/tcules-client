import { Button } from "@/components/ui/button";

const GetStarted = () => {
  return (
    <div className="col-start-11 col-end-13 lg:col-start-10 lg:col-end-12 pb-8 hidden md:flex flex-col gap-4 rounded-lg h-fit">
        <p className="text-label-2xs text-neutral-700">
          Have more questions ?
        </p>
        <h4 className="text-label-lg text-neutral-800">
          Get started with free UX consultation
        </h4>
      <Button>Schedule a call</Button>
    </div>
  );
};

export default GetStarted;
