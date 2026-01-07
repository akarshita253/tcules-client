import AboutContainer from "@/features/about/AboutContainer";
import { AboutQuery } from "@/lib/codegen/graphql";
import { ABOUT_QUERY } from "@/lib/queries/about";
import { strapiRequest } from "@/lib/utils";

const AboutLandingPage = async () => {
  const response = await strapiRequest<AboutQuery>(ABOUT_QUERY);
  const data = response?.about
  if (!data) return null;
  return <AboutContainer aboutData={data!} />;
};

export default AboutLandingPage;
