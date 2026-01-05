import CapablityContainer from "@/features/capablity/main/CapablityContainer";
import { CapablityQuery } from "@/lib/codegen/graphql";
import { CAPABLITIES_QUERY } from "@/lib/queries/capablities";
import { strapiRequest } from "@/lib/utils";

const CapablityLandingPage = async () => {
  const response = await strapiRequest<CapablityQuery>(CAPABLITIES_QUERY);
  const capablityData = response.capablity?.capablitiesSingleType;
  if (!capablityData) return null;
  return <CapablityContainer capablityData={capablityData} />;
};

export default CapablityLandingPage;
