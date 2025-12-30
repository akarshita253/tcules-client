import { Block } from "@/components/global/Block";
import { Container } from "@/components/global/Container";
import CaseStudyListingHeroSec from "./components/CaseStudyListingHeroSec";
import CaseStudyList from "./components/CaseStudyList";
import ApolloWrapper from "@/lib/providers/ApolloWrapper";
import { CaseStudyLandingPageQuery } from "@/lib/codegen/graphql";
import Miscellaneous from '@/components/shared/Miscellaneous'
import { Suspense } from "react";

const CaseStudyListingContainer = ({caseStudyLandingPageData}: {caseStudyLandingPageData: NonNullable<CaseStudyLandingPageQuery["caseStudyLandingPage"]>}) => {
  const heroSectionData = caseStudyLandingPageData.heroSection;
  const miscData = caseStudyLandingPageData.misc;
  return (
    <Container className="md:grid grid-cols-12 gap-6">
      <Block className="lg:col-start-2 col-start-1 lg:col-end-12 col-end-13">
        <CaseStudyListingHeroSec heroSectionData={heroSectionData}/>
      <ApolloWrapper>
          <Suspense fallback={<div>Loading case studies...</div>}>
            <CaseStudyList />
          </Suspense>
        </ApolloWrapper>
        <Miscellaneous miscSectionData={miscData}/>
      </Block>
    </Container>
  );
};

export default CaseStudyListingContainer;
