import TermsOfUseContainer from '@/features/legal/TermsOfUse'
import {  TermsOfUseQuery } from '@/lib/codegen/graphql'
import { TERMS_OF_USE } from '@/lib/queries/legal'
import { strapiRequest } from '@/lib/utils'

const TermsOfUse = async () => {
    const response = await strapiRequest<TermsOfUseQuery>(TERMS_OF_USE)
    const termsOfUseData = response.termsOfUse
  return (
    <TermsOfUseContainer termsOfUseData={termsOfUseData}/>
  )
}

export default TermsOfUse
