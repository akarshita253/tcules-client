import {gql} from "@apollo/client";

export const CAPABLITIES_QUERY = gql`
query Capablity {
  capablity {
    capablitiesSingleType {
      ... on ComponentServiceHeroSection {
        __typename
        heading
        description
        descriptionTwo
        heroSectionButton {
          id
          name
          href
        }
        label {
          id
          listText
        }
      }
      ...on ComponentCapablitiesCapablitiesCardSection{
        __typename
        id
        heading
        description
        serviceName
        icon {
          alternativeText
          url
          width
          height
        }
        sectionCards {
          id
          heading
          description
          icon {
            alternativeText
            url
            height
            width
          }
          cardPoints {
            id
            listText
          }
          link {
            href
            name
          }
        }
        subRouteLink {
          href
          name
        }
      }
      ...on ComponentSharedSeo{
        metaTitle
        metaDescription
      }
    } 
  }
}

`