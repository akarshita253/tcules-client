import { gql } from "@apollo/client";

export const CASE_STUDY_QUERY = gql`
  query CaseStudies($slug: String!) {
    caseStudies(filters: { slug: { eq: $slug } }) {
      __typename
      title
      slug
      thumbnail {
        alternativeText
        url
        width
        height
      }
      description
      publishedAt
      documentId
      heroImage {
        alternativeText
        url
        width
        height
      }
      profile {
        id
        heading
        description
      }
      statement {
        id
        type
        desc
      }
      caseStudyContents {
        ... on ComponentBlogAndCasestudiesBlogOrCasestudyText {
          __typename
          id
          blogContent
        }
        ... on ComponentBlogAndCasestudiesCodeSection {
          __typename
          id
          codeSnippet
        }
        ... on ComponentBlogAndCasestudiesIframe {
          __typename
          id
          title
          url
          height
          width
          embedCode
          description
          thumbnail {
            alternativeText
            url
            height
            width
          }
        }
        ... on ComponentBlogAndCasestudiesSectionImage {
          __typename
          id
          layout
          imageSection {
            alternativeText
            url
            height
            width
          }
        }
        ... on ComponentBlogAndCasestudiesSepration {
          __typename
          title
          marginTop
          marginBottom
          color
          styles
        }
        ... on ComponentBlogAndCasestudiesVideo {
          __typename
          id
          title
          videoFile {
            alternativeText
            url
            width
            height
          }
          autoplay
          loop
          description
          thumbnail {
            alternativeText
            url
            width
            height
          }
        }
        ... on ComponentSharedQuote {
          __typename
          id
          title
          body
        }
        ... on ComponentSharedSeo {
          __typename
          metaTitle
          metaDescription
          shareImage {
            alternativeText
            url
            width
            height
          }
        }
        ... on Error {
          __typename
          message
          code
        }
      }
    }
  }
`;

export const GET_CASESTUDY_LANDING_PAGE_DATA = gql`
query CaseStudyLandingPage {
  caseStudyLandingPage {
    heroSection {
      heading
      description
      button {
        name
        href
      }
    }  
    misc {
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

export const GET_ALL_CASE_STUDIES = gql`
  query AllCaseStudies($filters: CaseStudyFiltersInput) {
  caseStudies(filters: $filters) {
    __typename
    documentId
    title
    description
    createdAt
    updatedAt
    thumbnail {
      url
      width
      height
      alternativeText
    }
    slug
    categories {
      documentId
      name
    }
    tags {
      documentId
      name
    }
  }
}
`;

export const GET_CASESTUDY_CATEGORIES = gql`
  query Categories {
    categories {
      documentId
      name
      description
      slug
    }
  }
`;
export const GET_CASESTUDY_TAGS = gql`
  query Tags {
    tags {
      documentId
      name
      description
    }
  }
`;
