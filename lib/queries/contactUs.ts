import { gql } from "@apollo/client";

export const CONTACT_US_QUERY = gql`
  query ContactUs {
    contactUs {
      heading
      description
      seo {
        metaTitle
        metaDescription
        canonicalURL
        codeJson
        focusString
        robots
        slug
        structuredData
        graphCode
      }
      cards {
        id
        heading
        icon {
          alternativeText
          url
          width
          height
        }
        link {
          icon {
            alternativeText
            url
            width
            height
          }
          href
          name
        }
      }
      socialMedia {
        icon {
          alternativeText
          url
          height
          width
        }
        href
        name
        id
      }
    }
  }
`;
