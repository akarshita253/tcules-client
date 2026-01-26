import { gql } from "@apollo/client";

export const MATTER_DESIGN_QUERY = gql`
  query MatterDesignSystem {
    matterDesignSystem {
      heroSection {
        label
        headingOne
        headingTwo
        description
        link {
          href
          name
        }
        featureImage {
          alternativeText
          width
          height
          url
        }
      }
      secondSection {
        heading
        icon {
          alternativeText
          width
          height
          url
        }
        cardDetails {
          id
          heading
          description
          icon {
            alternativeText
            width
            height
            url
          }
          link {
            href
            name
          }
        }
      }
      thirdSection {
        heading
        cards {
          id
          heading
          description
          cardImage {
            alternativeText
            width
            height
            url
          }
        }
      }
      stripOne {
        heading
        description
        link {
          href
          name
        }
        bgIcon {
          alternativeText
          width
          height
          url
        }
      }
      fourthSection {
        displayCards {
          id
          heading
          d
          icon {
            alternativeText
            width
            height
            url
          }
          images {
            alternativeText
            width
            height
            url
          }
        }
      }
      fifthSection {
        heading
        cards {
          heading
          description
          icon {
            alternativeText
            width
            height
            url
          }
          id
        }
      }
      stripTwo {
        heading
        description
        bgIcon {
          alternativeText
          width
          height
          url
        }
        link {
          href
          name
        }
      }
      contactUs {
        headingOne
        headingTwo
        description
        icon {
          alternativeText
          width
          height
          url
        }
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
