import { ArrowRight } from "lucide-react";

interface ProfileItem {
  id: string;
  heading?: string | null;
  description?: string | null;
}

interface StatementItem {
  id: string;
  type?: string | null;
  desc?: string | null;
}

interface PositioningProps {
  profile?: ProfileItem[] | null;
  statement?: StatementItem[] | null;
}

const Positioning = ({ profile, statement }: PositioningProps) => {
  const problem =
    statement?.find((item) => item.type?.toLowerCase() === "problem")?.desc ||
    "";
  const solution =
    statement?.find((item) => item.type?.toLowerCase() === "solution")?.desc ||
    "";

  return (
    <section className="py-30 bg-neutral-900 text-neutral-100">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1 flex flex-col gap-9">
          {profile &&
            profile.length > 0 &&
            profile.map((item) => (
              <div className="flex flex-col gap-1" key={item.id}>
                <small className="text-[14px] text-neutral-600">
                  {item.heading}
                </small>
                <small className="text-[16px]">{item.description}</small>
              </div>
            ))}
        </div>
        <div className="col-span-3 flex flex-col gap-12">
          <div>
            <h2 className="text-neutral-600 text-[32px] leading-[120%] mb-2 flex items-center gap-2">
              <ArrowRight color="red" />
              <span>Problem</span>
            </h2>
            <p className="leading-[140%]">{problem}</p>
          </div>
          <div>
            <h2 className="text-neutral-600 text-[32px] leading-[120%] mb-2 flex items-center gap-2">
              <ArrowRight color="green" />
              <span>Solution</span>
            </h2>
            <p className="leading-[140%]">{solution}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Positioning;
