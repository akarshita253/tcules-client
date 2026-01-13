import ResourceContainer from "@/features/resource/ResourceContainer";
import { ResourceQuery } from "@/lib/codegen/graphql";
import { RESOURCES_QUERY } from "@/lib/queries/resources";
import { strapiRequest } from "@/lib/utils";

const Resource = async () => {
  const response = await strapiRequest<ResourceQuery>(RESOURCES_QUERY);
  const resourceData = response?.resource;
  if (!resourceData) return null;
  return <ResourceContainer resourceData={resourceData}/>;
};

export default Resource;
