import { gql } from "@apollo/client";

export const NAVBAR_QUERY = gql`
  query Navbar {
    navbar {
      navbarLogo {
        alternativeText
        url
        width
        height
      }
      navButton {
        href
        name
      }
      navLevelOneGroup {
        id
        name
        href
        isSubMenuAvailable
        navLevelTwoGroup {
          id
          name
          description
          hasSubMenu
          href
          levelTwoLinks {
            id
            name
            href
            description
            isExternal
            icon {
              alternativeText
              width
              url
              height
            }
          }
        }
      }
    }
  }
`;
