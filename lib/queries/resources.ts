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
        }
      }
      thirdSection {
        heading
        industry
        product
        topic
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
    }
  }
`;
