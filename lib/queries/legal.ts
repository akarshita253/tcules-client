import { gql } from "@apollo/client";

export const PRIVACY_POLICY = gql`
  query PrivacyPolicy {
    privacyPolicy {
      heading
      description
      updatedAt
      legalDescription {
        ... on ComponentLegalDetails {
          __typename
          id
          heading
          description
        }
      }
    }
  }
`;

export const TERMS_OF_USE = gql`
  query TermsOfUse {
    termsOfUse {
      heading
      description
      updatedAt
      legalDescription {
        ... on ComponentLegalDetails {
          __typename
          id
          heading
          description
        }
      }
    }
  }
`;
