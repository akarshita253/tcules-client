import PrivacyPolicyContainer from '@/features/legal/PrivacyPolicy'
import { PrivacyPolicyQuery } from '@/lib/codegen/graphql'
import { PRIVACY_POLICY } from '@/lib/queries/legal'
import { strapiRequest } from '@/lib/utils'

const PrivacyPolicy = async () => {
  const response = await strapiRequest<PrivacyPolicyQuery>(PRIVACY_POLICY)
  const privacyPolicyData = response.privacyPolicy
  return (
   <PrivacyPolicyContainer privacyPolicyData={privacyPolicyData}/>
  )
}

export default PrivacyPolicy
