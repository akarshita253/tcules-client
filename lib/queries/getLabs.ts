import { gql } from "@apollo/client";

export const LABS_SINGLE_TYPE = gql`
query LabSingleType {
  labSingleType {
    heroSection {
      heading
      description
      highlightedDescription
      button {
        name
        href
      }
    }
    detailSection{
      ... on ComponentLabsCardSection{
        __typename
        id
        heading
        cards {
          id
          heading
          description
          icon {
            alternativeText
            width
            url
            height
          }
          list {
            id
            listText
          }
          cardImage {
            alternativeText
            url
            width
            height
          }
          list {
            id
            listText
          }
          cardTiles {
            id
            heading
            description
          }
        }
      }
    }
    miscSection {
      label
      heading
      description
      button {
        name
        href
      }
    }
  }
}
`