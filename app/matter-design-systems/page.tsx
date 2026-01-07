import MatterDesignSystemContainer from "@/features/matter_design_system/MatterDesignSystemContainer";
import { MatterDesignSystemQuery } from "@/lib/codegen/graphql";
import { MATTER_DESIGN_QUERY } from "@/lib/queries/matterDesign";
import { strapiRequest } from "@/lib/utils";

const MatterDesignLandingPage = async () => {
  const response = await strapiRequest<MatterDesignSystemQuery>(
    MATTER_DESIGN_QUERY
  );
  const matterDesignSystemData = response.matterDesignSystem;
  if (!matterDesignSystemData) return null;
  return (
    <MatterDesignSystemContainer
      matterDesignSystemData={matterDesignSystemData!}
    />
  );
};

export default MatterDesignLandingPage;
