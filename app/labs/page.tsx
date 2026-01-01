import LabsContainer from '@/features/labs/LabsContainer'
import { LabSingleTypeQuery } from '@/lib/codegen/graphql'
import { LABS_SINGLE_TYPE } from '@/lib/queries/getLabs'
import { strapiRequest } from '@/lib/utils'
import React from 'react'

const LabsLandingPage = async () => {
  const response = await strapiRequest<LabSingleTypeQuery>(LABS_SINGLE_TYPE)
    return (
    <LabsContainer labsData={response}/>
  )
}

export default LabsLandingPage
