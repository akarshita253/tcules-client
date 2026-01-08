import CareerContainer from "@/features/career/CareerContainer";
import { CareerQuery } from "@/lib/codegen/graphql";
import { CAREER_QUERY } from "@/lib/queries/career";
import { strapiRequest } from "@/lib/utils";

const CareerLandingPage = async () => {
  const response = await strapiRequest<CareerQuery>(CAREER_QUERY);
  const careerData = response.career;
  if(!careerData) return null;
  return <CareerContainer careerData={careerData} />;
};

export default CareerLandingPage;
