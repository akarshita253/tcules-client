"use client"

import { ApolloProvider } from "@apollo/client/react"
import client from "../apolloClient"

const ApolloWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}

export default ApolloWrapper
