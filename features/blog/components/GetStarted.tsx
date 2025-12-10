import { Button } from "@/components/ui/button";

const GetStarted = () => {
  return (
    <div className="col-start-11 col-end-13 lg:col-start-10 lg:col-end-12 pb-8 hidden md:flex flex-col gap-4 rounded-lg h-fit">
        <p className="text-gray-600 text-sm leading-[140%]">
          Have more questions ?
        </p>
        <h4 className="text-[20px] font-medium leading-[130%]">
          Get started with free UX consultation
        </h4>
      <Button className="uppercase">Schedule a call</Button>
    </div>
  );
};

export default GetStarted;
