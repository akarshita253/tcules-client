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
      icon {
        alternativeText
        url
        width
        height
      }
      link {
        href
        isExternal
        name
      }
      bottomHeading
      bottomLink {
        href
        isExternal
        name
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
          href
          isExternal
          name
        }
      }
    }
  }
}

`