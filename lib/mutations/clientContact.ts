import { gql } from "@apollo/client";

export const CLIENT_CONTACT_MUTATION = gql`
  mutation Mutation($data: ClientContactInput!) {
    createClientContact(data: $data) {
      clientName
      clientEmail
      clientCompany
      clientContact
      clientComments
    }
  }
`;
