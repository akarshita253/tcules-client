import Section from "@/components/global/Section";
import { Cards } from "@/components/shared/Cards";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const ExploreResources = () => {
  const imageUrl = {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    alternativeText: "Code Image",
  };
  return (
    <Section>
      <div className="flex flex-col md:flex-row justify-between items-baseline">
        <h2 className="">
          <span className=" text-display-xs text-accent-500">Explore </span>
          <span className="text-heading-sm">other resources</span>
        </h2>
        <Link
          href="#"
          className="flex items-center gap-2 text-neutral-700 uppercase text-caption-lg mt-4 md:mt-0"
        >
          View all <ChevronRight className="text-neutral-700 text-xs" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-9 md:mt-16">
        <Cards
          imageUrl={imageUrl}
          title="Do AI Not For AI’s Sake But For Your User: Insights from Eden AI’s CTPO"
          createdAt={"2025-12-03T18:38:19.322Z"}
        />
        <Cards
          imageUrl={imageUrl}
          title="Do AI Not For AI’s Sake But For Your User: Insights from Eden AI’s CTPO"
          createdAt={"2025-12-03T18:38:19.322Z"}
        />
        <Cards
          imageUrl={imageUrl}
          title="Do AI Not For AI’s Sake But For Your User: Insights from Eden AI’s CTPO"
          createdAt={"2025-12-03T18:38:19.322Z"}
        />
      </div>
    </Section>
  );
};

export default ExploreResources;
