import { GraphQLClient } from 'graphql-request';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL
    // credentials: 'include', // if you need cookies/auth
  }),
  cache: new InMemoryCache(),
  // ssrMode: typeof window === 'undefined', // optional, good for App Router
});


const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_GRAPHQL_ENDPOINT = `${STRAPI_URL}/graphql`;

export const strapiClient = new GraphQLClient(STRAPI_GRAPHQL_ENDPOINT);

export default client;