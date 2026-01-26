import { gql } from "@apollo/client";

export const GET_SINGLE_PODCAST = gql`
  query Podcasts($filters: PodcastFiltersInput) {
    podcasts(filters: $filters) {
      __typename
      title
      description
      createdAt
      documentId
      slug
      thumbnail {
        url
        width
        height
        alternativeText
      }
      featureImage {
        alternativeText
        url
        width
        height
      }
      updatedAt
      tags {
        name
        documentId
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

export const GET_PODCAST_THUMBNAIL = gql`
  query GetSinglePodcast($filters: PodcastFiltersInput) {
    podcasts(filters: $filters) {
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
