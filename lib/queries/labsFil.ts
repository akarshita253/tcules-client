import { gql } from "@apollo/client";

export const GET_LABS_FIL_QUERY = gql`
  query LabsFilLandingPage {
    labsFilLandingPage {
      heroSection {
        label
        heading
        description
        button {
          name
          href
        }
      }
      secondSection {
        heading
        icon {
          url
          alternativeText
        }
        cards {
          id
          heading
          icon {
            alternativeText
            url
          }
          description
          link {
            name
            href
          }
        }
      }
      thirdSection {
        heading
        description
        icon {
          alternativeText
          url
        }
        cards {
          id
          heading
          description
          icon {
            alternativeText
            url
          }
          link {
            name
            href
          }
        }
      }
      fourthSection {
        description
        fourthSection {
          id
          heading
          icon {
            alternativeText
            url
          }
          cards {
            id
            heading
            description
            icon {
              alternativeText
              url
            }
            link {
              href
              name
            }
          }
        }
      }
      fifthSection {
        heading
        description
        cards {
          id
          heading
          description
          icon {
            alternativeText
            url
          }
          link {
            name
            href
          }
        }
      }
      sixthSection {
        heading
        description
        leftCard {
          heading
          description
          bottomText
        }
        rightCard {
          id
          heading
          description
        }
      }
      seventhSection {
        heading
        description
        faqs {
          question
          answer
          slug
        }
      }
      eighthSection {
        heading
        description
        icon {
          alternativeText
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
