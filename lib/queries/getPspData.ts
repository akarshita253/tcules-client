import {gql} from "@apollo/client";

export const GET_PSP_DATA = gql`
query ProgrammaticSeoPages($filters: ProgrammaticSeoPageFiltersInput) {
  programmaticSeoPages(filters: $filters) {
    title
    slug
    description
    heroSectionLink {
      href
      name
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
    thirdSection 
    fourthSection
    fifthSection
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
      graphCode
    }
  }
}
`