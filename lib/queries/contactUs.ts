import { gql } from "@apollo/client";

export const CONTACT_US_QUERY = gql`
  query ContactUs {
    contactUs {
      heading
      description
      cards {
        id
        heading
        link {
          icon {
            alternativeText
            url
            width
            height
          }
          href
          name
        }
      }
      socialMedia {
        icon {
          alternativeText
          url
          height
          width
        }
        href
        name
        id
      }
    }
  }
`;
