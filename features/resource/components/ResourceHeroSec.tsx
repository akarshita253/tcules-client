import Section from "@/components/global/Section";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Service from "@/public/service.svg";

const ResourceHeroSec = () => {
  return (
    <>
      <Section>
        <h1 className="text-center lg:w-3/5 mx-auto">
          <span className="text-display-sm text-accent-600 inline-block">
            {/* {heroSectionData?.heading?.split(",")[0]} */}
            Insights from building
          </span>
          <span className="text-heading-sm text-neutral-800 inline-block">
            {/* {heroSectionData?.heading?.split(",")[1]} */}
            products at the edge of design, engineering, and AI
          </span>
        </h1>
        <p className="text-label-xl mt-6 lg:w-4/5 mx-auto text-center text-neutral-700 mb-[108px]">
          {/* {heroSectionData?.description} */}
          In-depth articles, actionable playbooks, and experimental work from
          teams solving complexity-heavy product problems.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative w-full h-40 rounded-xl overflow-hidden">
            <Image src={Service} fill className="object-cover" alt="Hero section image"/>
            <h3 className="p-4 absolute bottom-0 left-0 text-neutral-50 text-heading-2xs">Articles</h3>
          </div>
          <div className="relative w-full h-40 rounded-xl overflow-hidden">
            <Image src={Service} fill className="object-cover" alt="Hero section image"/>
            <h3 className="p-4 absolute bottom-0 left-0 text-neutral-50 text-heading-2xs">Articles</h3>
          </div>
          <div className="relative w-full h-40 rounded-xl overflow-hidden">
            <Image src={Service} fill className="object-cover" alt="Hero section image"/>
            <h3 className="p-4 absolute bottom-0 left-0 text-neutral-50 text-heading-2xs">Articles</h3>
          </div>
          <div className="relative w-full h-40 rounded-xl overflow-hidden">
            <Image src={Service} fill className="object-cover" alt="Hero section image"/>
            <h3 className="p-4 absolute bottom-0 left-0 text-neutral-50 text-heading-2xs">Articles</h3>
          </div>
        </div>
      </Section>
      <div className="p-8">
        <h3 className="text-heading-xs text-neutral-800 mb-3">
          Tcules Labs Experiments
        </h3>
        <p className="text-label-xl text-neutral-700 mb-8 lg:w-4/5">
          We are crafting innovative AI solutions to improve user experiences,
          streamline processes, and enhance efficiency across various sectors.
        </p>
        <Button>
          <span>Go to Labs</span>
          <ChevronRight size={20} />
        </Button>
      </div>
    </>
  );
};

export default ResourceHeroSec;
