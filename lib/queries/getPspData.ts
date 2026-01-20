import {gql} from "@apollo/client";

export const GET_PSP_DATA = gql`
query ProgrammaticSeoPages($filters: ProgrammaticSeoPageFiltersInput) {
  programmaticSeoPages(filters: $filters) {
    title
    slug
    heroSection {
      heading
      description
      heroSectionButton {
        href
        name
        id
      }
    }
    secondSection {
      heading
      cardImage {
        id
        file {
          alternativeText
          url
          height
          width
        }
      }
    }
    thirdSection {
      headingTop
      headingBottom
      descriptionTop
      descriptionBottom
      bottomLink {
        href
        name
      }
      bottomIcon {
        alternativeText
        url
        height
        width
      }
      pspCards {
        id
        heading
        points {
          id
          listText
        }
      }
    }
    fourthSection {
      heading
      description
      cards {
        id
        heading
        points {
          id
          listText
        }
        links {
          href
          id
          name
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
      }
    }
    sixthSection {
      heading
      featureImage {
        alternativeText
        width
        height
        url
      }
      link {
        name
        href
      }
    }
    testimonialSection {
      heading
      description
      testimonials {
        clientComments
        clientName
        clientPosition
        clientProfilePicture {
          alternativeText
          url
          height
          width
        }
      }
    }
    resourceSection {
      heading
      link {
        href
        name
      }
      case_studies {
        slug
        thumbnail {
          alternativeText
          url
          height
          width
        }
        title
        description
        tags {
          name
        }
        categories {
          name
        }

      }
    }
    faqSection {
      heading
      description
      faqs {
        documentId
        question
        answer
      }
    }
    contactUs {
      heading
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
      og_graph {
        og_title
        og_description
        og_image {
          alternativeText
          url
          width
          height
        }
        twitter_card_type
      }
    }
  }
}
`