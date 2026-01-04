import LabsFilContainer from "@/features/labs_fil/LabsFilContainer";
import { LabsFilLandingPageQuery } from "@/lib/codegen/graphql";
import { GET_LABS_FIL_QUERY } from "@/lib/queries/labsFil";
import { strapiRequest } from "@/lib/utils";

const LabsFIL = async () => {
  const response = strapiRequest<LabsFilLandingPageQuery>(GET_LABS_FIL_QUERY);
  const labsFilData = (await response).labsFilLandingPage
  return <LabsFilContainer labsFilData = {labsFilData}/>;
};

export default LabsFIL;
