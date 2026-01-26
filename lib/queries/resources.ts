import { gql } from "@apollo/client";

export const RESOURCES_QUERY = gql`
  query Resource {
    resource {
      heading
      description
      cardDetails {
        id
        heading
        cardImage {
          alternativeText
          url
          height
          width
        }
      }
      secondSection {
        heading
        description
        link {
          href
          isExternal
          name
          icon {
            alternativeText
            url
            height
            width
          }
        }
      }
      thirdSection {
        heading
        filterResource {
          id
          label
          categories {
            name
          }
          tags {
            name
          }
        }
        case_studies {
          documentId
          title
          slug
          thumbnail {
            alternativeText
            url
            height
            width
          }
          updatedAt
          createdAt
        }
      }
      fourthSection {
        heading
        description
      }
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
    }
  }
`;
