import { HomepageQuery } from '@/lib/codegen/graphql'
import React from 'react'

const HomepageSecondSection = ({secondSectionData}:{secondSectionData: NonNullable<HomepageQuery["homepage"]>["secondSection"]}) => {
  return (
    <div>
      
    </div>
  )
}

export default HomepageSecondSection
