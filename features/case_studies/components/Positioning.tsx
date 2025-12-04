import {Container} from "@/components/global/Container";
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
    <section className="sm:py-30 py-16 bg-neutral-900 ">
      <Container className="text-neutral-100">
        <div className="grid sm:grid-cols-12 sm:gap-4 gap-8">
          <div className="sm:col-span-4 flex justify-between sm:flex-col gap-4 sm:gap-9">
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
          <div className="sm:col-span-8 flex flex-col gap-12">
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
      </Container>
    </section>
  );
};

export default Positioning;
