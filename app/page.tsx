import { HomepageQuery } from "@/lib/codegen/graphql";
import { HOME_PAGE_QUERY } from "@/lib/queries/getHomepage";
import { strapiRequest } from "@/lib/utils";
import HomePageContainer from "@/features/homepage/HomePageContainer";

const Homepage = async ()=> {
  const response = await strapiRequest<HomepageQuery>(HOME_PAGE_QUERY);
  const homepageData = response.homepage;
  return <HomePageContainer homepageData={homepageData!}/>
}

export default Homepage
