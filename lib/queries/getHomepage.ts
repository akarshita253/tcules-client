import { gql } from "@apollo/client";

export const HOME_PAGE_QUERY = gql`
  query Homepage {
    homepage {
      heroSection {
        headingOne
        headingTwo
        descriptionOne
        descriptionTwo
        scrollImages {
          url
          width
          height
          alternativeText
        }
        button {
          id
          name
          href
        }
        bottomTags {
          id
          listText
        }
      }
      secondSection {
        secondSection {
          id
          heading
          description
          image {
            alternativeText
            url
            height
            width
          }
          bgImage {
            alternativeText
            url
            height
            width
          }
          link {
            botomImage {
              alternativeText
              height
              url
              width
            }
            case_study {
              slug
              title
            }
          }
        }
      }
      thirdSection {
        heading
        icon {
          alternativeText
          url
          width
          height
        }
        cards {
          id
          heading
          description
          href
          icon {
            alternativeText
            url
            height
            width
          }
        }
      }
      fourthSection {
        heading
        description
        icon {
          alternativeText
          url
          width
          height
        }
        button {
          name
          href
        }
        cards {
          id
          heading
          cardImage {
            alternativeText
            width
            height
            url
          }
        }
      }
      fifthSection {
        heading
        description
        blogsDetails {
          tags {
            name
          }
          title
          slug
        }
      }
      contactSection {
        heading
        testimonial {
          clientComments
          clientCompany
          clientName
          clientPosition
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
