import { CaseStudiesQuery } from "@/lib/codegen/graphql";
import Positioning from "./components/Positioning";
import { renderBlock } from "./components/MainCaseStudySection";
import CaseStudyHeroSection from "./components/CaseStudyHeroSection";
import { Container } from "@/components/global/Container";
import { Block } from "@/components/global/Block";

const CaseStudyContainer = ({
  caseStudy,
}: {
  caseStudy: NonNullable<CaseStudiesQuery["caseStudies"][0]>;
}) => {
  const profile =
    caseStudy?.profile?.filter(
      (item): item is NonNullable<typeof item> => item !== null
    ) || null;
  const statement =
    caseStudy?.statement?.filter(
      (item): item is NonNullable<typeof item> => item !== null
    ) || null;

  const safeHeroImage = caseStudy?.heroImage
    ? {
        url: caseStudy.heroImage.url,
        alternativeText:
          caseStudy.heroImage.alternativeText || "Case Study Hero Image",
        width: caseStudy.heroImage.width ?? 1200,
        height: caseStudy.heroImage.height ?? 800,
      }
    : {
        url: "",
        alternativeText: "No Hero Image Available",
        width: 1200,
        height: 800,
      };

  return (
    <>
      <CaseStudyHeroSection title={caseStudy?.title} image={safeHeroImage} />
      <Positioning profile={profile} statement={statement} />
      <Container className="md:py-[120px] py-16 md:grid grid-cols-12 gap-6">
        <Block className="lg:col-start-2 col-start-1 lg:col-end-12 col-end-13">
          {caseStudy.caseStudyContents?.map((block) => renderBlock(block))}
        </Block>
      </Container>
    </>
  );
};

export default CaseStudyContainer;
