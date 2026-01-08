import {gql} from "@apollo/client";

export const CAREER_QUERY = gql `
query Career {
  career {
    heading
    description
    secondSection {
      heading
      cardDetails {
        id
        heading
        icon {
          alternativeText
          url
          width
          height
        }
      }
    }
    thirdSection {
      heading
      description
      openings {
        documentId
        roleName
        roleLocation
        roleDomain
        roleDescription
        link {
          href
          name
          isExternal
        }
      }
    }
    fourthSection {
      heading
      headingTwo
      description
      icon {
        alternativeText
        url
        width
        height
      }
      rightSection {
        heading
        link {
          href
          name
        }
        rightSectionPoints {
          id
          points
          icon {
            alternativeText
            url
            width
            height
          }
        }
      }
    }
    fifthSection {
      heading
      description
      link {
        href
        name
      }
      rightSection {
        heading
        link {
          href
          name
        }
        rightSectionPoints {
          icon {
            alternativeText
            url
            width
            height
          }
          id
          points
        }
      }
    }
  }
}

`