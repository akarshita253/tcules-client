import { gql } from "@apollo/client";

export const GET_SINGLE_INTERVIEW = gql`
  query Interviews($filters: InterviewFiltersInput) {
    interviews(filters: $filters) {
      __typename
      title
      updatedAt
      createdAt
      description
      slug
      documentId
      tags {
        name
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
      featureImage {
        alternativeText
        url
        width
        height
      }
      thumbnail {
        url
        width
        height
        alternativeText
      }
      categories {
        documentId
        name
      }
      tags {
        documentId
        name
      }
      mainSection {
        ... on ComponentBlogAndCasestudiesTldrSection {
          __typename
          id
          heading
          tdlrDescription
        }
        ... on ComponentBlogAndCasestudiesSectionImage {
          __typename
          layout
          imageSection {
            alternativeText
            url
            width
            height
          }
        }
        ... on ComponentBlogAndCasestudiesSepration {
          __typename
          color
          styles
        }
        ... on ComponentBlogAndCasestudiesBlogOrCasestudyText {
          __typename
          id
          blogContent
        }
        ... on ComponentBlogAndCasestudiesVideo {
          __typename
          autoplay
          videoFile {
            url
            alternativeText
            width
            height
          }
          id
          loop
          thumbnail {
            alternativeText
            url
            width
            height
          }
          title
        }
        ... on ComponentPodcasteEventsInterviewsShadowCard {
          __typename
          id
          heading
          description
          isShadowVisible
          isBackgroundAvailable
          link {
            name
            href
          }
        }
      }
    }
  }
`;

export const GET_INTERVIEW_THUMBNAIL = gql`
  query GetSingleInterview($filters: InterviewFiltersInput) {
    interviews(filters: $filters) {
      __typename
      title
      updatedAt
      createdAt
      description
      slug
      documentId
      featureImage {
        alternativeText
        url
        width
        height
      }
      thumbnail {
        url
        width
        height
        alternativeText
      }
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
