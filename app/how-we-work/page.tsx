import HowWeWorkContainer from "@/features/how_we_work/HowWeWorkContainer";
import { HowWeWorkQuery } from "@/lib/codegen/graphql";
import { HOW_WE_WORK } from "@/lib/queries/howWeWork";
import { strapiRequest } from "@/lib/utils";

const HowWeWork = async () => {

  const response = await strapiRequest<HowWeWorkQuery>(HOW_WE_WORK);
  return <HowWeWorkContainer howWeWorkData={response}/>;
};

export default HowWeWork;
