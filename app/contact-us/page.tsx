import ContactUsContainer from "@/features/contact_us/ContactUsContainer";
import { ContactUsQuery } from "@/lib/codegen/graphql";
import { generateSeoMetadata } from "@/lib/data/generateSeoMetaData";
import { getStrapiPage } from "@/lib/data/getStrapiPage";
import { CONTACT_US_QUERY } from "@/lib/queries/contactUs";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return generateSeoMetadata({
    getSeo: async () => {
      const pageData = await getStrapiPage<
        ContactUsQuery,
        ContactUsQuery["contactUs"]
      >({
        query: CONTACT_US_QUERY,
        extract: (res) => res.contactUs,
      });

      return pageData?.seo;
    },
  });
}

const ContactUS = async () => {
    const response = await getStrapiPage<
      ContactUsQuery,
      ContactUsQuery
    >({
      query: CONTACT_US_QUERY,
      extract: (res) => res,
    });
    if(!response) return null
  return (
    <>
      {response?.contactUs?.seo?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(response?.contactUs.seo.structuredData),
          }}
        />
      )}
      {response?.contactUs?.seo?.codeJson && (
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: response?.contactUs.seo.codeJson,
          }}
        />
      )}
      <ContactUsContainer contactUsData={response} />
    </>
  );
};

export default ContactUS;
