import { Button } from "@/components/ui/button";

const GetStarted = () => {
  return (
    <div className="col-span-3 py-8 hidden md:flex flex-col gap-4 rounded-lg h-fit">
        <p className="text-gray-600 text-sm leading-[140%]">
          Have more questions ?
        </p>
        <h4 className="text-[20px] font-medium leading-[130%]">
          Get started with free UX consultation
        </h4>
      <Button>Schedule a call</Button>
    </div>
  );
};

export default GetStarted;
