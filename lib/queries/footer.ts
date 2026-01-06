import { gql } from "@apollo/client";

export const FOOTER_QUERY = gql`
  query Footer {
    footer {
      logo {
        alternativeText
        height
        width
        url
      }
      footer {
        heading
        link {
          name
          href
        }
        links {
          id
          heading
          pageLinks {
            name
            href
            isExternal
          }
        }
      }
      socialMedia {
        label
        socialMedia {
          id
          icon {
            alternativeText
            url
            height
            width
          }
          href
        }
        rightSection {
          id
          heading
          description
          links {
            isExternal
            icon {
              alternativeText
              url
              width
              height
            }
            name
            href
          }
        }
      }
      legal {
        address
        legalLinks {
          id
          name
          href
        }
      }
    }
  }
`;
