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
