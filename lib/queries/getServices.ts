import { gql } from "@apollo/client";

export const GET_SERVICES = gql`
query Service {
  service {
    hero {
      __typename
      heading
      description
      label {
        id
        listText
      }
      heroSectionButton {
        name
        href
      }
    }
    whyTeamHireSection {
      __typename
      heading
      whyHireUsCards {
        id
        heading
        description
        icon {
          url
          width
          height
          alternativeText
        }
        list {
          id
          listText
        }
      }
    }
    whatWeDesignSection {
      __typename
      heading
      whatWeDesignCards {
        heading
        icon {
          url
          width
          height
          alternativeText
        }
        cardTiles {
          id
          heading
          description
        }
      }
      bottomDetails {
        heading
        description
        cardImage {
          alternativeText
          width
          height
          url
        }
      }
    }
    operatingPhilosophySection {
      __typename
      heading
      operatingPhilosophyCards {
        id
        heading
        description
        cardImage {
          alternativeText
          width
          height
          url
        }
      }
    }
    howWeWorkSection {
      __typename
      heading
      labels {
        id
        listText
      }
      link {
        name
        href
      }
      howWeWorkCards {
        id
        heading
        cardTiles {
          id
          heading
          description
        }
      }
    }
    recentWorkSection {
      __typename
      heading
      exploreLink {
        name
        href
      }
      exploreCards {
        id
        heading
        description
        cardImage {
          alternativeText
          url
          width
          height
        }
        cardTiles {
          id
          heading
          description
        }
        list {
          id
          listText
        }
      }
    }
    miscSection {
      __typename
      heading
      description
      label
      button {
        id
        name
        href
      }
    }
  }
}
`