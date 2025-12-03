import { ChevronRight } from "lucide-react";
import Link from "next/link";

const ExploreResources = () => {
  return (
    <section className="">
      <div className="flex justify-between items-baseline">
        <h2 className="text-4xl font-medium">
          <span>Explore </span>
          <span>other resources</span>
        </h2>
        <Link href="#" className="flex items-center gap-2 text-neutral-700 uppercase">View all <ChevronRight className="text-neutral-700"/></Link>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-16">

      </div>
    </section>
  );
};

export default ExploreResources;
