import MatterDesignSystemContainer from "@/features/matter_design_system/MatterDesignSystemContainer";
import { MatterDesignSystemQuery } from "@/lib/codegen/graphql";
import { generateSeoMetadata } from "@/lib/data/generateSeoMetaData";
import { getStrapiPage } from "@/lib/data/getStrapiPage";
import { MATTER_DESIGN_QUERY } from "@/lib/queries/matterDesign";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return generateSeoMetadata({
    getSeo: async () => {
      const pageData = await getStrapiPage<
        MatterDesignSystemQuery,
        MatterDesignSystemQuery["matterDesignSystem"]
      >({
        query: MATTER_DESIGN_QUERY,
        extract: (res) => res.matterDesignSystem,
      });

      return pageData?.seo;
    },
  });
}

const MatterDesignLandingPage = async () => {
  const matterDesignSystemData = await getStrapiPage<
    MatterDesignSystemQuery,
    MatterDesignSystemQuery["matterDesignSystem"]
  >({
    query: MATTER_DESIGN_QUERY,
    extract: (res) => res?.matterDesignSystem,
  });

  if (!matterDesignSystemData) return null;
  return (
    <>
       {matterDesignSystemData?.seo?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(matterDesignSystemData.seo.structuredData),
          }}
        />
      )}
      {matterDesignSystemData?.seo?.codeJson && (
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: matterDesignSystemData.seo.codeJson,
          }}
        />
      )}
      <MatterDesignSystemContainer
        matterDesignSystemData={matterDesignSystemData!}
      />
    </>
  );
};

export default MatterDesignLandingPage;
