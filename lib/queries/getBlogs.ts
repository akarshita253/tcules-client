import { gql } from "@apollo/client";

export const GET_BLOG_BY_SLUG = gql`
  query Blogs($slug: String!) {
    blogs(filters: { slug: { eq: $slug } }) {
      __typename
      createdAt
      updatedAt
      title
      slug
      featureImage {
        alternativeText
        url
        width
        height
      }
      blogProfileSection {
        id
        name
        designation
        profilePicture {
          url
          width
          height
          alternativeText
        }
      }
      mainSection {
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
          url
          title
          width
          description
          embedCode
          height
          id
          thumbnail {
            alternativeText
            url
            height
            width
          }
        }
        ... on ComponentBlogAndCasestudiesSectionImage {
          __typename
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
          color
          marginBottom
          marginTop
          thickness
        }
        ... on ComponentBlogAndCasestudiesTldrSection {
          __typename
          id
          heading
          tdlrDescription
        }
        ... on ComponentBlogAndCasestudiesVideo {
          __typename
          id
          autoplay
          description
          loop
          title
          videoFile {
            alternativeText
            url
            height
            width
          }
          thumbnail {
            alternativeText
            url
            height
            width
          }
        }
        ... on ComponentSharedRichText {
          __typename
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
      }
    }
  }
`;
