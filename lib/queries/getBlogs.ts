import { gql } from "@apollo/client";

export const GET_BLOG = gql`
  query Blogs($filters: BlogFiltersInput) {
    blogs(filters: $filters) {
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
      ctoSection {
        heading
        description
        link {
          name
          href
          isExternal
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
          id
          url
          title
          width
          height
          description
          embedCode
          thumbnail {
            alternativeText
            url
            height
            width
          }
        }

        ... on ComponentBlogAndCasestudiesSectionImage {
          __typename
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
        }
      }
    }
  }
`;

export const GET_BLOGS = gql`
  query AllBlogs {
    blogs {
      title
      slug
      publishedAt
      updatedAt
      createdAt
      documentId
      categories {
        documentId
        name
      }
      thumbnail {
        url
        width
        height
        alternativeText
      }
      tags {
        documentId
        name
      }
      featureImage {
        alternativeText
        url
        height
        width
      }
    }
  }
`;
