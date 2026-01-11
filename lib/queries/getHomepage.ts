import { gql } from "@apollo/client";

export const HOME_PAGE_QUERY = gql`
  query Homepage {
    homepage {
      heroSection {
        headingOne
        headingTwo
        descriptionOne
        descriptionTwo
        rightSectionImage {
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
        bgImage {
          url
          width
          height
          alternativeText
        }
        secondSection {
          id
          heading
          description
          topDescription
          image {
            alternativeText
            url
            height
            width
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
        case_studies {
          title
          tags {
            name
          }
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
    }
  }
`;
