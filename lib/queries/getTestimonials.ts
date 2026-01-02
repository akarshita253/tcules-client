import {gql} from "@apollo/client";

export const TESTIMONIALS_QUERY = gql `
query Testimonials {
  testimonials {
    clientName
    clientPosition
    clientCompany
    clientComments  
  }
}
`