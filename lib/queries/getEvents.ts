import { gql } from "@apollo/client";

export const GET_SINGLE_EVENT_QUERY = gql`
  query Events($filters: EventFiltersInput) {
    events(filters: $filters) {
      __typename
      title
      description
      updatedAt
      slug
      createdAt
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
      eventWhereAbout {
        id
        descOne
        descTwo
      }
      tags {
        documentId
        name
        description
      }
      categories {
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

export const GET_EVENT_THUMBNAIL = gql`
  query GetSingleEvent($filters: EventFiltersInput) {
    events(filters: $filters) {
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
