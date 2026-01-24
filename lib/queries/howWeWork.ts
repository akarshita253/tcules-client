import { gql } from "@apollo/client";

export const HOW_WE_WORK = gql`
  query HowWeWork {
    howWeWork {
      heroSection {
        heading
        description
        button {
          name
          href
        }
      }
      secondSection {
        heading
        leftCard {
          id
          heading
          description
          button {
            name
            href
          }
          icon {
            alternativeText
            width
            url
            height
          }
          list {
            id
            listText
          }
          details {
            heading
            description {
              id
              listText
            }
          }
        }
      }
      thirdSection {
        heading
        details {
          id
          heading
          points {
            id
            listText
          }
          button {
            name
            description
            href
          }
        }
      }
      miscSection {
        label
        heading
        description
        button {
          name
          href
        }
      }
    }
  }
`;
