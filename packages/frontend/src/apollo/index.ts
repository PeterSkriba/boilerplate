import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'production'
      ? process.env.API_URL
      : process.env.GRAPHQL_ENDPOINT,

  cache: new InMemoryCache(),
})

export default client
