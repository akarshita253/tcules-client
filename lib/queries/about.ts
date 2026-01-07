import {gql} from "@apollo/client";

export const ABOUT_QUERY = gql `
query About {
  about {
    heading
    headingTwo
    description
    descriptionTwo
    bgImage {
      alternativeText
      url
      width
      height
    }
    secondSection {
      heading
      description
      images {
        alternativeText
        url
        width
        height
      }
    }
    thirdSection {
      heading
      description
      images {
        alternativeText
        url
        width
        height
      }
    }
    fourthSection {
      label
      accordianDetails {
        id
        heading
        description
      }
    }
    fifthSection {
      heading
      cardDetails {
        id
        description
        designation
        isImageVisible
        profilePicture {
          alternativeText
          url
          width
          height
        }
      }
    }
    sixthSection {
      heading
      sixthSectionCards {
        id
        heading
        description
      }
    }
    seventhSection {
      heading
      link {
        href
        name
        isExternal
      }
      cardDetails {
        id
        heading
        description
        icon {
          alternativeText
          url
          width
          height
        }
      }
    }
  }
}

`