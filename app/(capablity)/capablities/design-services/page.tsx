import ServiceContainer from '@/features/services/ServiceContainer'
import { ServiceQuery } from '@/lib/codegen/graphql';
import { GET_SERVICES } from '@/lib/queries/getServices';
import { strapiRequest } from '@/lib/utils'
import { notFound } from 'next/navigation';

const Services = async () => {
  const response = await strapiRequest<ServiceQuery>(GET_SERVICES)
  if (!response) {
    notFound();
  }
  const service = response.service;

  return (
   <ServiceContainer service={service!} />
  )
}

export default Services
