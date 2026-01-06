import {gql} from "@apollo/client";

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
    featureImage {
      alternativeText
      url
      width
      height
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

`